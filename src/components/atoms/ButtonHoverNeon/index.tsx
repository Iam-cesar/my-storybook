import React from "react";
import { ButtonHoverNeonContainer } from "./styles";

interface IButtonHoverNeonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const ButtonHoverNeon = ({ ...props }: IButtonHoverNeonProps) => {
  return (
    <ButtonHoverNeonContainer role="button" {...props}>
      Button Neon
    </ButtonHoverNeonContainer>
  );
};

export default ButtonHoverNeon;
