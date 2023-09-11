import { styled } from "styled-components";

export const NavigationTabsContainer = styled.div`
  display: flex;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const NavigationButton = styled.button`
  color: rgba(242, 242, 242, 0.8);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 0.65rem 1rem;
`;
