import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { useTheme } from "../context/ThemeContext";

export function DefaultLayout(){
    const { theme } = useTheme();
    return (
        <main className={`bg-${theme} text-${theme === "light" ? "dark" : "light"}`}> 
            <NavBar />
            <Outlet />
        </main>
    );
}