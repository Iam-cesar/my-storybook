"use client";

import { $isCodeNode, getCodeLanguages } from "@lexical/code";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getNodeByKey,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BlockOptionsDropdownList from "../component/atoms/BlockOptionsDropdownList";
import InsertFilesDropdownList from "../component/atoms/InsertFilesDropdownList";
import ToolbarSelect from "../component/atoms/ToolbarSelect";
import useUpdateToolbar from "../hooks/useUpdateToolbar";
import ArrowClockwise from "../icons/ArrowClockwise";
import ArrowCounterclockwise from "../icons/ArrowCounterclockwise";
import ChevronDown from "../icons/ChevronDown";
import Justify from "../icons/Justify";
import TextCenter from "../icons/TextCenter";
import TextLeft from "../icons/TextLeft";
import TextParagraph from "../icons/TextParagraph";
import TextRight from "../icons/TextRight";
import TypeBold from "../icons/TypeBold";
import TypeCode from "../icons/TypeCode";
import TypeItalic from "../icons/TypeItalic";
import TypeLink from "../icons/TypeLink";
import TypeStrikethrough from "../icons/TypeStrikethrough";
import TypeUnderline from "../icons/TypeUnderline";
import { EditorToolbar } from "../styles";
import FloatingLinkEditor from "../utils/FloatingLinkEditor";

const LowPriority = 1;

const supportedBlockTypes = new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "ul",
  "ol",
  "img",
]);

const blockTypeToBlockName = {
  code: "Code Block",
  h1: "Large Heading",
  h2: "Small Heading",
  h3: "Heading",
  h4: "Heading",
  h5: "Heading",
  ol: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
  ul: "Bulleted List",
};

function Divider() {
  return <div className="divider" />;
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const insertFilesBtnRef = useRef<HTMLButtonElement>(null);

  const [showBlockOptionsDropDown, setShowBlockOptionsDropDown] =
    useState(false);
  const [showInsertOptionsDropDown, setShowInsertOptionsDropDown] =
    useState(false);

  const {
    blockType,
    codeLanguage,
    isBold,
    isCode,
    isItalic,
    isLink,
    isStrikethrough,
    isUnderline,
    selectedElementKey,
    isRTL,
    canRedo,
    canUndo,
  } = useUpdateToolbar();

  const codeLanguages = useMemo(() => getCodeLanguages(), []);
  const onCodeLanguageSelect = useCallback(
    (e: any) => {
      editor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(e.target.value);
          }
        }
      });
    },
    [editor, selectedElementKey]
  );

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return (
    <EditorToolbar ref={toolbarRef}>
      <button
        disabled={!canUndo}
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        className="toolbar-item spaced"
        aria-label="Undo"
      >
        <ArrowCounterclockwise />
      </button>
      <button
        disabled={!canRedo}
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        className="toolbar-item"
        aria-label="Redo"
      >
        <ArrowClockwise />
      </button>

      <Divider />

      {supportedBlockTypes.has(blockType) && (
        <>
          <button
            className="toolbar-item block-controls"
            onClick={() =>
              setShowBlockOptionsDropDown(!showBlockOptionsDropDown)
            }
            aria-label="Formatting Options"
          >
            <TextParagraph />
            <span className="text">{blockTypeToBlockName[blockType]}</span>
            <ChevronDown />
          </button>

          {showBlockOptionsDropDown &&
            createPortal(
              <BlockOptionsDropdownList
                editor={editor}
                blockType={blockType}
                toolbarRef={toolbarRef}
                setShowBlockOptionsDropDown={setShowBlockOptionsDropDown}
              />,
              document.body
            )}
          <Divider />
        </>
      )}

      {blockType === "code" ? (
        <>
          <ToolbarSelect
            className="toolbar-item code-language"
            onChange={onCodeLanguageSelect}
            options={codeLanguages}
            value={codeLanguage}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
            className={"toolbar-item spaced " + (isBold ? "active" : "")}
            aria-label="Format Bold"
          >
            <TypeBold />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
            }
            className={"toolbar-item spaced " + (isItalic ? "active" : "")}
            aria-label="Format Italics"
          >
            <TypeItalic />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
            }
            className={"toolbar-item spaced " + (isUnderline ? "active" : "")}
            aria-label="Format Underline"
          >
            <TypeUnderline />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
            }
            className={
              "toolbar-item spaced " + (isStrikethrough ? "active" : "")
            }
            aria-label="Format Strikethrough"
          >
            <TypeStrikethrough />
          </button>
          <button
            onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
            className={"toolbar-item spaced " + (isCode ? "active" : "")}
            aria-label="Insert Code"
          >
            <TypeCode />
          </button>
          <button
            onClick={insertLink}
            className={"toolbar-item spaced " + (isLink ? "active" : "")}
            aria-label="Insert Link"
          >
            <TypeLink />
          </button>
          {isLink &&
            createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
          <Divider />
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")
            }
            className="toolbar-item spaced"
            aria-label="Left Align"
          >
            <TextLeft />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
            }
            className="toolbar-item spaced"
            aria-label="Center Align"
          >
            <TextCenter />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")
            }
            className="toolbar-item spaced"
            aria-label="Right Align"
          >
            <TextRight />
          </button>
          <button
            onClick={() =>
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")
            }
            className="toolbar-item"
            aria-label="Justify Align"
          >
            <Justify />
          </button>

          <>
            <button
              ref={insertFilesBtnRef}
              className="toolbar-item block-controls"
              onClick={() =>
                setShowInsertOptionsDropDown(!showInsertOptionsDropDown)
              }
              aria-label="Inserting file options"
            >
              <TextParagraph />
              <span className="text">Inserir</span>
              <ChevronDown />
            </button>

            {showInsertOptionsDropDown &&
              createPortal(
                <InsertFilesDropdownList
                  insertFilesBtnRef={insertFilesBtnRef}
                  setShowInsertOptionsDropDown={setShowInsertOptionsDropDown}
                />,
                document.body
              )}
            <Divider />
          </>
        </>
      )}
    </EditorToolbar>
  );
}
