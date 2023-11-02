import styled from "styled-components";

interface IMenuFloatContainerProps {
  isMenuOpen: boolean;
}

export const PageContent = styled.div`
  position: relative;
  width: 80vw;
  height: 60vh;
  font-family: "Inter";
`;

const animationTime = "0.4s";

export const MenuFloatContainer = styled.div<IMenuFloatContainerProps>`
  --border-radius: 12px;
  --bg-menu-wrapper: 34, 34, 34;
  --bg-color: #222;
  --border-radius: 8px;

  position: absolute;
  bottom: 2rem;
  width: 100%;

  display: flex;
  justify-content: center;

  .inner {
    border-radius: var(--border-radius);
    padding: 6px;
    background-color: rgba(var(--bg-menu-wrapper), 0.8);
    color: #f2f2f2;
    max-width: 556px;

    transition: all ${animationTime} ease-in-out;
    width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "12%")};
  }

  .menu-float-inner {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: var(--border-radius);
    align-items: center;
    background-color: var(--bg-color);
    height: 60px;
    padding: 0 20px;
    transition: all ${animationTime} ease-in-out;
    width: calc(100% - 40px);
    white-space: nowrap;
  }
`;
