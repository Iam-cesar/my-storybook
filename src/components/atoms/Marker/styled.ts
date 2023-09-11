import styled from "styled-components";

interface IMarkerContainerProps {
  activetab: { start: number; width: number };
}

export const MarkerContainer = styled.div<IMarkerContainerProps>`
  background-color: navajowhite;
  bottom: 0;
  height: 3px;
  left: ${({ activetab }) => activetab.start}px;
  position: absolute;
  transition: 250ms ease-in-out;
  width: ${({ activetab }) => activetab.width}px;
`;
