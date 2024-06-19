import styles from "./Card.module.css"
import { useFavoritosContext } from "../../components/Context/Favorito";
import iconFavorito from "./icono-favorito.png"
import iconNoFavorito from "./icono-no-favorito.png"
import { Link } from "react-router-dom";


function Card({id, capa, titulo}){

    const {favorito, agregarFavorito} = useFavoritosContext()
    const esFavorito = favorito.some(fav => fav.id === id)
    const icon = esFavorito ? iconFavorito : iconNoFavorito

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}> 
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img src={icon} alt="Icono Favorito" className={styles.favorito} onClick={() => agregarFavorito({id,capa, titulo})}/>
        </div>
    );
}

export default Card;