"use client";

import React, { createContext } from "react";
import { Brand, Model } from "@manhattanlabs/lib/types";

export const LayoutContext = createContext<{
  models: Model[];
  brands: Brand[];
}>({
  models: [],
  brands: [],
});

// @ts-ignore
export default function LayoutProvider({ value, children }) {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
