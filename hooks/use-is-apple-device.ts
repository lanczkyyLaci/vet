"use client";

import { useState, useEffect } from "react";

export const useIsAppleDevice = (): boolean => {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isAppleDevice =
      /iPhone|iPad|iPod|Macintosh|MacIntel|MacPPC|Mac68K/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0);
    setIsApple(isAppleDevice);
  }, []);

  return isApple;
};
