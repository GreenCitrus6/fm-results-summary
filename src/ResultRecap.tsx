import styles from './ResultRecap.module.css';
import { useState, useEffect } from 'react';
import type { ScoreData } from './types';
import ScoreMeter from './ScoreMeter';

interface ComponentProps {
    data: ScoreData[];
}

const findAvgScore = (data: Array<ScoreData>) => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].score;
    }
    let avg = total / data.length;
    let roundedAvg = Math.floor(avg);

    return roundedAvg;
}


export default function ResultRecap({ data }: ComponentProps) {
    const [avgScore, setAvgScore] = useState(0);

    useEffect(() => {
        setAvgScore(findAvgScore(data));
    }, []);

    const percentile = 65;

    return(
        <section className={styles.card}>
            <h2 className={styles.resultHeader}>Your Result</h2>
            {/* <span>{avgScore}/100</span> */}
            <ScoreMeter score={avgScore} />
            <p className={styles.rating}>Great</p>
            <p>You scored higher than {percentile}% of the people who have taken these tests</p>
        </section>
    );
}