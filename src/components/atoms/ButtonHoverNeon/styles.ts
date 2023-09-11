import styled from "styled-components";
import {
  borderBottomLeftAnimationIn,
  borderBottomLeftAnimationOut,
  borderTopRightAnimationIn,
  borderTopRightAnimationOut,
} from "./keyframes";

export const ButtonHoverNeonContainer = styled.span`
  --blue-neon: #00eeff;

  padding: 0.65rem 1rem;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  color: var(--tons-de-cinza-600, #f2f2f2);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 20px */

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 45px;
  width: max-content;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    left: 0;
    top: 0;
    height: 0;
    border-top: 3px solid var(--blue-neon);
    border-right: 3px solid var(--blue-neon);
    opacity: 0;

    animation-name: ${borderTopRightAnimationOut};
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: backwards;
  }

  &::after {
    right: 0;
    bottom: 0;
    height: 0;
    border-bottom: 3px solid var(--blue-neon);
    border-left: 3px solid var(--blue-neon);
    opacity: 0;

    animation-name: ${borderBottomLeftAnimationOut};
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: backwards;
  }

  &:hover {
    color: var(--blue-neon);
    box-shadow: 2px 0px 48px 0px var(--blue-neon);

    &::before {
      animation-name: ${borderTopRightAnimationIn};
      animation-duration: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      border-top: 3px solid var(--blue-neon);
      border-right: 3px solid var(--blue-neon);
    }

    &::after {
      animation-name: ${borderBottomLeftAnimationIn};
      animation-duration: 300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      border-bottom: 3px solid var(--blue-neon);
      border-left: 3px solid var(--blue-neon);
    }
  }
`;
