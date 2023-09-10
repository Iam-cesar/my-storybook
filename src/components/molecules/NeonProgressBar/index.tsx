import React from "react";
import { NeonProgressBarContainer } from "./styles";

interface INeonProgressBarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const NeonProgressBar = ({ ...props }: INeonProgressBarProps) => {
  return (
    <NeonProgressBarContainer {...props}>
      <div className="progress">
        <div className="inner-progress-bar-detail" />
      </div>
    </NeonProgressBarContainer>
  );
};

export default NeonProgressBar;
