import styles from './ScoreCell.module.css';
import type { ScoreData } from "./types";

interface ComponentProps {
    data: ScoreData;
}

export default function ScoreCell( { data }: ComponentProps) {
    return(
        <div className={`${styles.cell} ${styles[data.category]}`}>
            <div className={styles.categoryContainer}>
                <img src={data.icon} className={styles.icon} />
                <span className={styles[`${data.category}Text`]}>
                    {data.category}
                </span>
            </div>

            <span>
                <span className={styles.scoreNumber}>{data.score} </span>
                / 100
            </span>
        </div>
    );
}