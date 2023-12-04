import { $isAtNodeEnd } from "@lexical/selection";
import { RangeSelection } from "lexical";

export default function getSelectedNode(selection: RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  const isBackward = selection.isBackward();

  if (anchorNode === focusNode) return anchorNode;

  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}
