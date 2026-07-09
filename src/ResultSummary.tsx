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
            <h2>Summary</h2>
            <div className={styles.scoreCellContainer}>
                {data.map((item) => (
                    <ScoreCell data={item}/>
                ))}
            </div>
            <Button text={"Continue"} />
        </section>
    );
}