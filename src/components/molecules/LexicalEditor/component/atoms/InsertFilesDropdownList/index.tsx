"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useRef } from "react";
import { EditorDropdown } from "../../../styles";
import ImageToolbarButton from "../ImageToolbarButton";

interface IInsertFilesDropdownListProps {
  insertFilesBtnRef: React.RefObject<HTMLButtonElement>;
  setShowInsertOptionsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InsertFilesDropdownList({
  insertFilesBtnRef,
  setShowInsertOptionsDropDown,
}: IInsertFilesDropdownListProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const insertButton = insertFilesBtnRef.current;
    const dropDown = dropDownRef.current;

    if (insertButton !== null && dropDown !== null) {
      const { top, left } = insertButton.getBoundingClientRect();
      dropDown.style.top = `${top + 40}px`;
      dropDown.style.left = `${left}px`;
    }
  }, [dropDownRef, insertFilesBtnRef]);

  useEffect(() => {
    const dropDown = dropDownRef.current;
    const insertButton = insertFilesBtnRef.current;

    if (dropDown !== null && insertButton !== null) {
      const handle = (event: any) => {
        const target = event.target;

        if (!dropDown.contains(target) && !insertButton.contains(target)) {
          setShowInsertOptionsDropDown(false);
        }
      };
      document.addEventListener("click", handle);

      return () => {
        document.removeEventListener("click", handle);
      };
    }
  }, [dropDownRef, setShowInsertOptionsDropDown, insertFilesBtnRef]);

  return (
    <EditorDropdown ref={dropDownRef}>
      <ImageToolbarButton />
    </EditorDropdown>
  );
}
