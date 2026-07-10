import styles from './ResultSummary.module.css';
import ScoreCell from './ScoreCell';
import Button from './Button';
import type { ScoreData } from './types';

interface ComponentProps {
    data: ScoreData[];
}

export default function ResultSummary({ data }: ComponentProps) {

    return(
        <section className={styles.card}>
            <div className={styles.scoreCellContainer}>
                <h2 className={styles.summaryHeader}>Summary</h2>
                {data.map((item) => (
                    <ScoreCell data={item}/>
                ))}
            </div>
            <Button text={"Continue"} />
        </section>
    );
}