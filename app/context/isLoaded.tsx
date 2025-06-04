"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the detailed page context
interface PageContextType {
  pageLoad: boolean;
  loadingAnimation: boolean;
}

// Define the shape of the context state
interface IsLoadedContextType {
  pageContext: PageContextType;
  setPageContext: React.Dispatch<React.SetStateAction<PageContextType>>;
}

// Create context
const IsLoadedContext = createContext<IsLoadedContextType | undefined>(
  undefined
);

// Create a provider component
export const IsLoadedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pageContext, setPageContext] = useState<PageContextType>({
    pageLoad: false,
    loadingAnimation: false,
  });

  return (
    <IsLoadedContext.Provider value={{ pageContext, setPageContext }}>
      {children}
    </IsLoadedContext.Provider>
  );
};

// Custom hook
export const useIsLoaded = (): IsLoadedContextType => {
  const context = useContext(IsLoadedContext);
  if (!context) {
    throw new Error("useIsLoaded must be used within an IsLoadedProvider");
  }
  return context;
};
