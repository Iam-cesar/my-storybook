import { useEffect, useState } from "react";

const useNavigationTabs = () => {
  const [activeTab, setActiveTab] = useState({
    start: 0,
    width: 0,
  });

  function setClientTab(e: any) {
    const el = e.target;
    setActiveTab(() => ({ start: el?.offsetLeft, width: el?.offsetWidth }));
  }

  useEffect(() => {
    const firstBtn = document
      .querySelectorAll("#nav-btn")
      .item(0) as HTMLButtonElement;

    setActiveTab(() => ({
      start: firstBtn?.offsetLeft,
      width: firstBtn?.offsetWidth,
    }));
  }, []);

  return {
    activeTab,
    setClientTab,
  };
};

export default useNavigationTabs;
