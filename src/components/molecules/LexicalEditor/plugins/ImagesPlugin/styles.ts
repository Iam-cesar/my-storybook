import styled from "styled-components";

export const InsertImageDialogContainer = styled.div``;

export const InsertImageUploadedDialogBodyContainer = styled.div<{
  show: boolean;
}>`
  transition: all 0.3ms;
  opacity: ${({ show }) => (show ? "1" : "0")};
  position: absolute;
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  z-index: 9999;
  background-color: #333;
`;

export const InsertImageUriDialogBodyContainer = styled.div<{ show: boolean }>`
  transition: all 0.3ms;
  opacity: ${({ show }) => (show ? "1" : "0")};
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  position: absolute;
  z-index: 9999;
  background-color: #333;
`;
