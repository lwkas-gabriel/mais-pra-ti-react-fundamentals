import { createContext, ReactNode, useContext, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode; 
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeContextProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<Theme>("light");

    function toggleTheme(){
        setTheme(prevTheme => (prevTheme === 'light' ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextProps {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
    }
    return context;
}