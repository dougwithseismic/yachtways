"use client"

import { YachtDetails } from "@/app/types";
import {
    ReactNode,
    createContext,
    useContext
} from "react";

// Context for Vessel Data
const VesselContext = createContext<YachtDetails | null>(null);

// Client-side Provider Component
export const VesselProvider: React.FC<{
  children: ReactNode;
  vessel: YachtDetails;
}> = ({ children, vessel }) => {
  return (
    <VesselContext.Provider value={vessel}>{children}</VesselContext.Provider>
  );
};

// Custom Hook
export const useVessel = (): YachtDetails | null => {
  const context = useContext(VesselContext);
  if (context === undefined) {
    throw new Error("useVessel must be used within a VesselProvider");
  }
  return context;
};
