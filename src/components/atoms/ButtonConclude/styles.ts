import styled, { keyframes } from "styled-components";

interface IButtonConcludeContainerProps {
  isLoading: boolean;
  isCompleted: boolean;
}

const spinner = keyframes`
  to { transform: rotate(360deg); }
`;

export const ButtonConcludeContainer = styled.span<IButtonConcludeContainerProps>`
  display: flex;
  padding: 0.65rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  border: none;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  cursor: pointer;
  opacity: 0.9;
  transition: all 100ms ease-in-out;
  white-space: nowrap;
  background-color: #fff;
  color: #010101;
  text-transform: capitalize;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0.6em;
    height: 0.6em;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.5, -0.5, 0.25, 1.5);
    top: calc(50% - 0.6em / 2);
  }

  &::before {
    left: 0;
    z-index: -1;
  }
  &::after {
    right: 0;
    z-index: -2;
  }

  &:hover {
    color: white;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: dodgerblue;
  }

  &:hover::before {
    top: 0;
  }

  &:hover::after {
    right: -0.4em;
    filter: brightness(0.8);
  }
`;
