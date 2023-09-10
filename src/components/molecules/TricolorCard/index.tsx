import { getCardBackgroundColor } from "./getCardBackgroundColor";
import { TricolorCardContainer } from "./styles";

interface ITricolorCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const TricolorCard = ({ children, ...props }: ITricolorCardProps) => {
  const points = 1e2;
  const { primary, secondary, tertiary } = getCardBackgroundColor(points);

  return (
    <TricolorCardContainer
      {...props}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
    >
      <p>Fazer 10x publicações em O Segredo do Cosmos</p>
      <span>100</span>
    </TricolorCardContainer>
  );
};

export default TricolorCard;
