import React from "react";
import useFontInter from "../../../hooks/useFontInter";
import useNavigationTabs from "../../../hooks/useNavigationTabs";
import Marker from "../../atoms/Marker";
import { NavigationButton, NavigationTabsContainer } from "./styles";

interface INavigationTabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const NavigationTabs = ({ ...props }: INavigationTabsProps) => {
  const { inter } = useFontInter();
  const { activeTab, setClientTab } = useNavigationTabs();

  return (
    <NavigationTabsContainer className={inter} {...props}>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Conteúdos
      </NavigationButton>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Conversas
      </NavigationButton>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Quizz
      </NavigationButton>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Materiais
      </NavigationButton>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Sobre
      </NavigationButton>
      <NavigationButton id="nav-btn" onClick={setClientTab}>
        Mais...
      </NavigationButton>

      <Marker activeTab={activeTab} />
    </NavigationTabsContainer>
  );
};

export default NavigationTabs;
