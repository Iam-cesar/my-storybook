import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { DRAG_DROP_PASTE } from "@lexical/rich-text";
import { isMimeType, mediaFileReader } from "@lexical/utils";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { useEffect } from "react";
import { INSERT_IMAGE_COMMAND } from "../ImagesPlugin";

const ACCEPTABLE_IMAGE_TYPES = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp",
];

export default function DragDropPaste(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      DRAG_DROP_PASTE,
      (files) => {
        (async () => {
          const filesResult = await mediaFileReader(
            files,
            [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x)
          );

          const formData = new FormData();

          for (const { file } of filesResult) {
            if (isMimeType(file, ACCEPTABLE_IMAGE_TYPES)) {
              formData.append("image", file);
              const url = await sendToAws(formData);

              editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                altText: file.name,
                src: url,
              });
            }
          }
        })();
        return true;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor]);
  return null;
}

async function sendToAws(body: FormData): Promise<string> {
  const response = await fetch(
    "https://beta.ensinio.cloud/api/v1/uploadimage",
    {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer PAbw9AH7KCTMYh30GRp5wWru0RXyORH3aGjdUvGK",
      },
      body,
    }
  )
    .then((res) => res.json())
    .then((json) => json.attrs.url)
    .catch((err) => err);

  return response;
}

// await api
//  .post("uploadimage", formData, {
//    headers: { "Content-Type": "multipart/form-data" },
//  })
//  .then((response) => {
//    if (response.status === 200) return response.data;
//    return {
//      error: true,
//      response: response.status,
//      "response: ": response.statusText,
//    };
//  })
//  .then((json) => {
//    const { url } = json.attrs;
//    const img = `<img src='${url}'/>`;
//    imagesList.push(img);
//  })
//  .catch((err) => {
//    return err;
//  });
