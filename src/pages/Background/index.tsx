import { useTheme } from "../../context/ThemeContext";

export function Background(){
    const { theme, toggleTheme } = useTheme();
    
    return (
        <main className="min-vh-100 d-flex flex-column align-items-center gap-4 m-auto justify-content-center my-4 w-75">
            <button className="btn btn-secondary" onClick={toggleTheme}>Alterar para tema {theme === "light" ? "escuro" : "claro"}</button>
        </main>
    )
}