"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface IsLoadedContextType {
  isLoadingComplete: boolean;
  setIsLoadingComplete: (isLoadingComplete: boolean) => void;
}

const IsLoadedContext = createContext<IsLoadedContextType | undefined>(
  undefined
);

// Create a provider component
export const IsLoadedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);

  return (
    <IsLoadedContext.Provider
      value={{ isLoadingComplete, setIsLoadingComplete }}
    >
      {children}
    </IsLoadedContext.Provider>
  );
};

// Create a custom hook for using the context
export const useIsLoaded = (): IsLoadedContextType => {
  const context = useContext(IsLoadedContext);
  if (context === undefined) {
    throw new Error("useIsLoaded must be used within an IsLoadedProvider");
  }
  return context;
};
