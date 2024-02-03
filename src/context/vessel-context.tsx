"use client"
// Importing necessary dependencies
import { YachtDetails } from "@/app/types";
import {
        ReactNode,
        createContext,
        useContext
} from "react";

// Context for Vessel Data
// Creating a context with initial value as null to hold the yacht details
const VesselContext = createContext<YachtDetails | null>(null);

// Client-side Provider Component
// Creating a provider component to provide the vessel data to its children
export const VesselProvider: React.FC<{
    children: ReactNode;
    vessel: YachtDetails;
}> = ({ children, vessel }) => {
    return (
        <VesselContext.Provider value={vessel}>{children}</VesselContext.Provider>
    );
};

// Custom Hook
// Creating a custom hook to access the vessel data from the context
export const useVessel = (): YachtDetails | null => {
    const context = useContext(VesselContext);
    if (context === undefined) {
        throw new Error("useVessel must be used within a VesselProvider");
    }
    return context;
};
