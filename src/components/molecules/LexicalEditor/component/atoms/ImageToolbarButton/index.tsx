import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import {
  INSERT_IMAGE_COMMAND,
  InsertImagePayload,
} from "../../../plugins/ImagesPlugin";

export function FillURL() {
  const srcfile = prompt("Enter the URL of the image:", "");
  return srcfile || "";
}

export default function ImageToolbarButton(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onClick = (payload: InsertImagePayload) => {
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  };

  return (
    <button
      onClick={() =>
        onClick({
          altText: "URL image",
          src: FillURL(),
        })
      }
      className={"item item-insert-file"}
    >
      <span className="text">Insert image</span>
    </button>
  );
}
