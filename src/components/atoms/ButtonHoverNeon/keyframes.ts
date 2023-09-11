import { keyframes } from "styled-components";

export const borderTopRightAnimationIn = keyframes`
  0% { 
    width: 0px;
    height: 0px;
  }
  10%{
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  25% { 
    width: 100%;
    height: 0px;
    opacity: 1;
  }
  100% { 
    width: 100%;
    height: calc(100% - 3px);
    opacity: 1;
  }
`;

export const borderTopRightAnimationOut = keyframes`
  0% { 
    width: 100%;
    height: calc(100% - 3px);
    opacity: 1;
  }
  10%{
    width: 100%;
    height: 0px;
    opacity: 1;
  }
  25% { 
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  100% { 
    width: 0px;
    height: 0px;
  }
`;

export const borderBottomLeftAnimationIn = keyframes`
  0% { 
    width: 0px;
    height: 0px;
  }
  10%{
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  25% { 
    width: 100%;
    height: 0px;
    opacity: 1;
  }
  100% { 
    width: 100%;
    height: calc(100% - 3px);
    opacity: 1;
  }
`;

export const borderBottomLeftAnimationOut = keyframes`
  0% { 
    width: 100%;
    height: calc(100% - 3px);
    opacity: 1;
  }
  10%{
    width: 100%;
    height: 0px;
    opacity: 1;
  }
  25% { 
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  100% { 
    width: 0px;
    height: 0px;
  }
`;
