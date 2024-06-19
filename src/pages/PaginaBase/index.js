import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import FavoritoProvider from "components/Context/Favorito";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <>
            <Cabecera/>
            <Container>
                <FavoritoProvider>
                    <Outlet/>
                </FavoritoProvider>
            </Container>
            <Pie/>
        </>
        
    )
}

export default PaginaBase;