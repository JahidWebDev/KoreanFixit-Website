import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const { state } = location;

  useLayoutEffect(() => {
    if (state?.showBanner) {
      const bannerSection = document.getElementById("banner");
      if (bannerSection) {
        bannerSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (state?.scrollTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // instant scroll — no flash
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}