import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import  { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase/>}>
                <Route index element={<Inicio/>}></Route>
                <Route path="Favoritos" element={<Favoritos/>}></Route>
                <Route path=":id" element={<Player/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;