import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $insertNodes } from "lexical";
import { useCallback, useEffect } from "react";

interface IConvertHTMLToLexicalProps {
  htmlContent: string;
}

const ConvertHTMLToLexical = ({ htmlContent }: IConvertHTMLToLexicalProps) => {
  const [editor] = useLexicalComposerContext();

  const generateNodesFromDOM = useCallback(() => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(htmlContent, "text/html");
    return $generateNodesFromDOM(editor, dom);
  }, [editor, htmlContent]);

  const insertNodes = useCallback(() => {
    const nodes = generateNodesFromDOM();
    $getRoot().select();
    $getRoot().clear();
    $insertNodes(nodes);
  }, [generateNodesFromDOM]);

  useEffect(() => {
    editor.update(() => insertNodes());
  }, [editor, insertNodes]);

  return null;
};

export default ConvertHTMLToLexical;
