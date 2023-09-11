import { MarkerContainer } from "./styled";

interface IMarkerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  activeTab: { start: number; width: number };
}

const Marker = ({ activeTab, ...props }: IMarkerProps) => {
  return <MarkerContainer activetab={activeTab} {...props} />;
};

export default Marker;
