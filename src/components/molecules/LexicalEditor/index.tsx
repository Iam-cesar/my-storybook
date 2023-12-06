"use client";

import { useEffect, useState } from "react";

import { TRANSFORMERS } from "@lexical/markdown";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";

import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import EditorNodes from "./nodes/EditorNodes";
import PlaygroundAutoLinkPlugin from "./plugins/AutoLinkPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import ConvertHTMLToLexical from "./plugins/ConvertHTMLToLexical";
import DragDropPastePlugin from "./plugins/DragDropPastePlugin";
import ImagesPlugin from "./plugins/ImagesPlugin";
import NewMentionsPlugin from "./plugins/MentionsPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { postEnsinio } from "./post";
import { EditorContainer } from "./styles";
import lexicalTheme from "./ui/theme";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  theme: lexicalTheme,
  namespace: "daily-standup-editor",
  onError(error: unknown) {
    throw error;
  },
  nodes: [...EditorNodes],
};
interface IEditorProps {
  htmlContent: string;
}

function Editor({ htmlContent = postEnsinio.data }: IEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <EditorContainer>
        <ToolbarPlugin />

        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <DragDropPastePlugin />
          <ListPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <LinkPlugin />
          <TabIndentationPlugin />
          <PlaygroundAutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <ClearEditorPlugin />
          <ConvertHTMLToLexical htmlContent={htmlContent} />
          <ImagesPlugin />
          <NewMentionsPlugin />
        </div>
      </EditorContainer>
    </LexicalComposer>
  );
}

export default Editor;
