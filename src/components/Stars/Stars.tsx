import styles from "./Stars.module.css";
import Map from "./Map/Map";

const Stars = () => {
    return (
        <div className={styles.container}>
            <div>
                <Map />
            </div>
        </div>
    )
}

export default Stars