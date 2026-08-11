import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollOffset = 96;

const safeScrollTo = (top: number) => {
  if (typeof window.scrollTo !== "function") {
    return;
  }

  try {
    window.scrollTo({ top, behavior: "smooth" });
  } catch {
    // Test environments can miss smooth scrolling support.
  }
};

const ScrollToHash = () => {
  const { hash, pathname, search } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const pathChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    const timeoutId = window.setTimeout(() => {
      if (!hash) {
        if (pathChanged) {
          safeScrollTo(0);
        }
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (!target) {
        return;
      }

      const targetTop = target.getBoundingClientRect().top + window.scrollY - scrollOffset;
      safeScrollTo(Math.max(targetTop, 0));
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [hash, pathname, search]);

  return null;
};

export default ScrollToHash;