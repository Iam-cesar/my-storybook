import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import KatexRenderer from "../KatexRenderer";
import { KatexEquationAltererContainer } from "./styles";

type Props = {
  initialEquation?: string;
  onConfirm: (equation: string, inline: boolean) => void;
};

export default function KatexEquationAlterer({
  onConfirm,
  initialEquation = "",
}: Props): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [equation, setEquation] = useState<string>(initialEquation);
  const [inline, setInline] = useState<boolean>(true);

  const onClick = useCallback(() => {
    onConfirm(equation, inline);
  }, [onConfirm, equation, inline]);

  const onCheckboxChange = useCallback(() => {
    setInline(!inline);
  }, [setInline, inline]);

  return (
    <KatexEquationAltererContainer>
      <div className="KatexEquationAlterer_defaultRow">
        Inline
        <input type="checkbox" checked={inline} onChange={onCheckboxChange} />
      </div>
      <div className="KatexEquationAlterer_defaultRow">Equation </div>
      <div className="KatexEquationAlterer_centerRow">
        {inline ? (
          <input
            onChange={(event) => {
              setEquation(event.target.value);
            }}
            value={equation}
            className="KatexEquationAlterer_textArea"
          />
        ) : (
          <textarea
            onChange={(event) => {
              setEquation(event.target.value);
            }}
            value={equation}
            className="KatexEquationAlterer_textArea"
          />
        )}
      </div>
      <div className="KatexEquationAlterer_defaultRow">Visualization </div>
      <div className="KatexEquationAlterer_centerRow">
        <ErrorBoundary onError={(e) => editor._onError(e)} fallback={null}>
          <KatexRenderer
            equation={equation}
            inline={false}
            onDoubleClick={() => null}
          />
        </ErrorBoundary>
      </div>
      <div className="KatexEquationAlterer_dialogActions">
        <button className="item" onClick={onClick}>
          Confirm
        </button>
      </div>
    </KatexEquationAltererContainer>
  );
}
