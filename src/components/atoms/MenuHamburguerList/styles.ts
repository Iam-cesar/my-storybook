import styled from "styled-components";

interface IMenuHamburguerListContainerProps {
  isMenuOpen: boolean;
}
const animationDuration = "0.3s";

export const MenuHamburguerListContainer = styled.div<IMenuHamburguerListContainerProps>`
  --border-radius: 12px;
  --bg-menu-wrapper: 34, 34, 34;
  --bg-color: #222;
  --border-radius: 8px;

  display: flex;
  justify-content: center;
  pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "all" : "none")};
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "collapse")};

  .inner-menu-hamburguer-list {
    transition: all ${animationDuration};
    border-radius: var(--border-radius);
    background-color: rgba(var(--bg-menu-wrapper), 0.8);
    color: #f2f2f2;
    width: 100%;
    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? "0" : "30%")});
  }

  ul {
    transition: all ${animationDuration};
    margin: 0;
    padding: ${({ isMenuOpen }) => (isMenuOpen ? "1rem" : "0")};
  }

  li {
    height: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0")};
    list-style: none;
    max-height: 100%;
    min-width: 100%;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    transition: opacity 0.1ms;
    white-space: nowrap;
    overflow: hidden;
  }

  button {
    border: none;
    padding: 0;
  }
`;
