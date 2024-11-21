import { useTheme } from "../../context/ThemeContext";

export function Background(){
    const { theme, toggleTheme } = useTheme();
    
    return (
        <main className="container my-4 min-vh-100">
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={toggleTheme}>Alterar para tema {theme === "light" ? "escuro" : "claro"}</button>
            </div>
        </main>
    )
}