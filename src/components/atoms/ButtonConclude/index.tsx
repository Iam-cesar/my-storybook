import React, { useState } from "react";
import { ButtonConcludeContainer } from "./styles";

interface IButtonConcludeProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ButtonConclude = ({ ...props }: IButtonConcludeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);

  function handleLoading() {
    setIsLoading(!isLoading);
  }

  return (
    <ButtonConcludeContainer
      {...props}
      role="button"
      isLoading={isLoading}
      isCompleted={isCompleted}
      onClick={handleLoading}
    >
      ButtonConclude
    </ButtonConcludeContainer>
  );
};

export default ButtonConclude;
