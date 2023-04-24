import styles from "./Articles.module.css"
import { articleData } from "../NewsData"
import { Link } from "react-router-dom"

const Articles = () => {
    return (
        
        <div className={styles.container}>
            {articleData.map(item => (
                <div className={styles.article}>
                    <Link className={styles.link} to={item.id}>
                        <div className={styles.header}>
                            <div>
                                <p className={styles.category}>{item.category}</p>
                                <p className={styles.author}>{item.author}</p>
                                <p className={styles.title}>{item.title}</p>
                            </div>
                            <p className={styles.date}>{item.creationDate}</p>
                        </div>
                        <div className={styles.content}>
                            <img className={styles.image} src={item.image} alt="Photo de l'article"/>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Articles