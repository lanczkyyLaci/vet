"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getSnapshot = (): boolean => {
  const ua = navigator.userAgent;
  return (
    /iPhone|iPad|iPod|Macintosh|MacIntel|MacPPC|Mac68K/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0)
  );
};

const getServerSnapshot = (): boolean => false;

export const useIsAppleDevice = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
