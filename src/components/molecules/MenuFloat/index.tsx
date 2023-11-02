import { useState } from "react";
import MenuHamburguerList from "../../../components/atoms/MenuHamburguerList";
import MenuHamburguerIcon from "../../atoms/MenuHamburguerIcon";
import { MenuFloatContainer, PageContent } from "./styles";

const MenuFloat = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpener = () => setMenuOpen(!isMenuOpen);

  return (
    <PageContent>
      <MenuFloatContainer isMenuOpen={isMenuOpen}>
        <div className="inner">
          <MenuHamburguerList isMenuOpen={isMenuOpen} />
          <div className="menu-float-inner">
            w. home
            <MenuHamburguerIcon
              isMenuOpen={isMenuOpen}
              onClick={handleMenuOpener}
            />
          </div>
        </div>
      </MenuFloatContainer>
    </PageContent>
  );
};

export default MenuFloat;
