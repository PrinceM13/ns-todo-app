"use client";

import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const isClient = typeof window === "object"; // * check if window is defined

  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
    }
  }, [isClient]);

  useEffect(() => {
    // * update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // * remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth };
}
