import styled from "styled-components";
import {
  menuIconFirstElementAnimation,
  menuIconLastElementAnimation,
} from "./keyframes";

const animationTime = "0.4s";

interface IMenuHamburguerIconContainerProps {
  isMenuOpen: boolean;
}

export const MenuHamburguerIconContainer = styled.div<IMenuHamburguerIconContainerProps>`
  height: 100%;
  width: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all ${animationTime};

  .menu-hamburguer_item {
    background-color: #fff;
    height: 1px;
    width: 100%;
  }

  .menu-hamburguer_item:first-child,
  .menu-hamburguer_item:last-child {
    transition: all ${animationTime};
    animation-duration: ${animationTime};
    animation-fill-mode: forwards;
  }

  .menu-hamburguer_item:first-child {
    animation-name: ${({ isMenuOpen }) =>
      isMenuOpen && menuIconFirstElementAnimation};
  }

  .menu-hamburguer_item:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
  }

  .menu-hamburguer_item:last-child {
    animation-name: ${({ isMenuOpen }) =>
      isMenuOpen && menuIconLastElementAnimation};
  }
`;
