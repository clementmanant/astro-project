import styles from "./Navbar.module.css"
import planete from "../../assets/planete.png"
import Menu from "./Menu/Menu"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <img src={planete} alt="Accueil" />
                </a>
            </div>
            <Menu />
        </nav>
    )
}

export default Navbar