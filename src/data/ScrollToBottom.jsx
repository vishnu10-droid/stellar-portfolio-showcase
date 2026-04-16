import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line ensure karti hai ki naya page humesha zero (top) se start ho
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // Jab bhi URL ka 'pathname' badlega, ye function trigger hoga

  return null;
};

export default ScrollToTop;