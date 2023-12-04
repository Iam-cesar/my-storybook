import { lexicalState } from "./lexicalState";

export type TLexicalState = typeof lexicalState;

export interface ILexicalEditorContextProps {
  state: TLexicalState;
  setState: React.Dispatch<any>;
}
