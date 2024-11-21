import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export function DefaultLayout(){
    return (
        <main> 
            <NavBar />
            <Outlet />
        </main>
    );
}