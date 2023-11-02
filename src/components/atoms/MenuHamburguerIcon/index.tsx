import { MenuHamburguerIconContainer } from "./styles";

interface IMenuHamburguerIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isMenuOpen: boolean;
}

const MenuHamburguerIcon = ({
  isMenuOpen,
  ...props
}: IMenuHamburguerIconProps) => {
  return (
    <MenuHamburguerIconContainer isMenuOpen={isMenuOpen} {...props}>
      <div className="menu-hamburguer_item" />
      <div className="menu-hamburguer_item" />
      <div className="menu-hamburguer_item" />
    </MenuHamburguerIconContainer>
  );
};

export default MenuHamburguerIcon;
