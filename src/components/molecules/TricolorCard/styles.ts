import styled from "styled-components";

interface ITricolorCardProps {
  primary: string;
  secondary: string;
  tertiary: string;
}

export const TricolorCardContainer = styled.div<ITricolorCardProps>`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 50vw;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  background: linear-gradient(
      60deg,
      ${({ primary }) => primary} 40%,
      transparent 0%
    ),
    linear-gradient(135deg, ${({ secondary }) => secondary} 50%, transparent 0%),
    linear-gradient(0deg, ${({ tertiary }) => tertiary} 100%, transparent 0%);

  p {
    margin: 0;
    color: var(--tons-de-cinza-600, #f2f2f2);
    /* Shadow Text */
    text-shadow: 0px 0px 48px rgba(0, 0, 0, 0.24);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 20px */
    margin: 0;
  }

  span {
    color: #f2f2f2;
    /* Shadow Text */
    text-shadow: 0px 0px 48px rgba(0, 0, 0, 0.24);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
  }
`;
