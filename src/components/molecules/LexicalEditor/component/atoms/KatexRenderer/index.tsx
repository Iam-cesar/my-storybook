import katex from "katex";
import { useEffect, useRef } from "react";
import { KatexRendererContainer } from "./styles";

export default function KatexRenderer({
  equation,
  inline,
  onDoubleClick,
}: Readonly<{
  equation: string;
  inline: boolean;
  onDoubleClick: () => void;
}>): JSX.Element {
  const katexElementRef = useRef(null);

  useEffect(() => {
    const katexElement = katexElementRef.current;

    if (katexElement !== null) {
      katex.render(equation, katexElement, {
        displayMode: !inline, // true === block display //
        errorColor: "#cc0000",
        output: "html",
        strict: "warn",
        throwOnError: false,
        trust: false,
      });
    }
  }, [equation, inline]);

  return (
    <KatexRendererContainer>
      <img src="#" alt="" />
      <span
        role="button"
        tabIndex={-1}
        onDoubleClick={onDoubleClick}
        ref={katexElementRef}
      />
      <img src="#" alt="" />
    </KatexRendererContainer>
  );
}
