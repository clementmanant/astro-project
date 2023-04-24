import styles from "./News.module.css"
import Article from "./Articles/Articles"

const News = () => {
    return (
        <div className={styles.title}>
            <h1>News</h1>
            <Article />
        </div>
    )
}

export default News