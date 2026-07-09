import styles from './ScoreMeter.module.css';

interface ComponentProps {
    score: number;
}

export default function ScoreMeter({ score }: ComponentProps ) {
    return(
        <div className={styles.meterCircle}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.maxScore}>of 100</span>
        </div>
    );
}