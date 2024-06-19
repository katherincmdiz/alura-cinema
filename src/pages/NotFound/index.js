import styles from "./NotFound.module.css";

function NotFound() {
    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <img className={styles.imagen} src="https://i0.wp.com/www.sinembargo.mx/wp-content/uploads/2019/11/calamardo-1100.jpg?w=1100&quality=80&strip=all&ssl=1" alt="404"  />
            <p className={styles.texto_error}>Página no encontrada</p>
        </section>
    )
}

export default NotFound