import styled, { keyframes } from "styled-components";

const glowingBarAnimation = keyframes`
  from {
    box-shadow: 2px 0px 8px 0px #3d7fff;  
  }

  to {
    box-shadow: 2px 0px 18px 0px #3d7fff;
  }
`;

export const NeonProgressBarContainer = styled.div`
  display: flex;
  height: 32px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  background: rgba(39, 107, 240, 0.5);
  width: 30vw;

  .progress {
    animation: ${glowingBarAnimation} 1.5s alternate infinite;
    border-radius: 4px;
    height: 100%;
    background: #3d7fff;
    padding: 0.65rem 0.65rem 0 0.65rem;
    width: 50%;
  }

  .inner-progress-bar-detail {
    border-radius: 2px;
    background: #5992ff;

    width: 100%;
    height: 0.65rem;
  }
`;
