import styles from "./Navbar.module.css"
import Menu from "./Menu/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMeteor } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <Link className={styles.img} to={"/"}>
                        <FontAwesomeIcon icon={faMeteor} size="3x" />
                    </Link>
                    
                </a>
            </div>
            <div className={styles.title}>AstroProject</div>
            <Menu />
        </nav>
    )
}

export default Navbar