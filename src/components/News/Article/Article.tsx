import styles from "./Article.module.css";
import { articleData } from "../NewsData"
import { useParams } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";

const Article = () => {
    const { id } = useParams();

    const article = articleData.find(obj => {
        return obj.id === id;
    });

    if (article === undefined) {
        return <ErrorPage message="Il n'existe pas d'article à cette URL." />;
    }

    return (
        <div>
            <div className={styles.header}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.date}>{article.creationDate}</p>
            </div>
            <p className={styles.category}>{article.category}</p>
            <div>
                <img className={styles.image} src={article.image} alt="Photo de l'article"/>
                <p className={styles.description}>{article.description}</p>
            </div>
            <p className={styles.author}>{article.author}</p>
            <p className={styles.text}>Written by</p>
        </div>
    )
}

export default Article