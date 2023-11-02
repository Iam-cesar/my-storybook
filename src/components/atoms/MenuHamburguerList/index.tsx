import { MenuHamburguerListContainer } from "./styles";

interface IMenuHamburguerListProps {
  isMenuOpen: boolean;
}

const MenuHamburguerList = ({ isMenuOpen }: IMenuHamburguerListProps) => {
  return (
    <MenuHamburguerListContainer isMenuOpen={isMenuOpen}>
      <div className="inner-menu-hamburguer-list">
        <ul>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
          <li>Texto de menu boladão</li>
        </ul>
      </div>
    </MenuHamburguerListContainer>
  );
};

export default MenuHamburguerList;
