'use client'

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
    openLogin: boolean;
    setOpenLogin: (val: boolean) => void;
};

const AuthDialogContext = createContext<AuthContextType | undefined>(undefined);

export function AuthDialogProvider({ children }: { children: ReactNode }) {
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    return (
        <AuthDialogContext.Provider value={{ openLogin, setOpenLogin }}>
            {children}
        </AuthDialogContext.Provider>
    );
}

export const useAuthDialog = () => {
    const context = useContext(AuthDialogContext);
    if (!context) throw new Error("useAuthDialog must be used within AuthDialogProvider");
    return context;
};