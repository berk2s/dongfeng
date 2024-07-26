"use client";

import React, { createContext } from "react";
import { Model } from "@manhattanlabs/lib/types";

export const LayoutContext = createContext<{ models: Model[] }>({
  models: [],
});

// @ts-ignore
export default function LayoutProvider({ value, children }) {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
