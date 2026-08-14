import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GOOGLE_TAG_ID = "G-M26SS953QC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();
  const isFirstPageView = useRef(true);

  useEffect(() => {
    if (isFirstPageView.current) {
      isFirstPageView.current = false;
      return;
    }

    window.gtag?.("config", GOOGLE_TAG_ID, {
      page_location: window.location.href,
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
