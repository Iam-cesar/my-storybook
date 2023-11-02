import { keyframes } from "styled-components";

export const menuIconFirstElementAnimation = keyframes`
  0%{
    transform: rotate(0);
  }
  1%{
    transform: rotate(40deg);
  }
  50%{
    transform: rotate(40deg);
  }
  100%{
    transform: rotate(45deg) translate(3px, 3px);
  }
`;

export const menuIconLastElementAnimation = keyframes`
  0%{
    transform: rotate(0);
  }
  1%{
    transform: rotate(-40deg);
  }
  50%{
    transform: rotate(-40deg) ;
  }
  100%{
    transform: rotate(-45deg) translate(4px, -4px);
  }
`;
