import React from "react";
import useNavigationTabs from "../../../hooks/useNavigationTabs";
import Marker from "../../atoms/Marker";
import { NavigationButton, NavigationTabsContainer } from "./styles";

interface INavigationTabsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const NavigationTabs = ({ ...props }: INavigationTabsProps) => {
  const { activeTab, setClientTab } = useNavigationTabs();

  return (
    <NavigationTabsContainer {...props}>
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
