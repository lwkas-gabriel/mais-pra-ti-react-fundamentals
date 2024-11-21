import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/index";
import { Index } from "./pages/Index";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={ <Index />}/>
                {/* <Route path="/" element={ <Post />}/> */}
            </Route>
        </Routes>
    );
}