import { useState } from "react"
import styles from "./Menu.module.css"
import { menuData } from "./MenuData"
import { Link } from "react-router-dom";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const Items = () => (
        <div>
            <nav className={openMenu === true ? styles.navShow : styles.navHide}>
                <ul className={styles.items}>
                    {menuData.map(item => (
                        <li className={styles.list} key={item.label}>
                            <Link className={styles.link} to={item.url} onClick={() => setOpenMenu(!openMenu)}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
      )

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={() => setOpenMenu(!openMenu)}>
                <i className="fa-regular fa-bars fa-2xl"></i>
            </div>
            { menuData.length && (
                <div>
                { openMenu ? <Items /> : null }
              </div>
            ) }
        </div>      
    )
}

export default Menu