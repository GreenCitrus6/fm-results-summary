import styles from './ResultRecap.module.css';

export default function ResultRecap() {
    const percentile = 65;

    return(
        <section className={styles.card}>
            <h2 className={styles.resultHeader}>Your Result</h2>
            <span>{76}/100</span>
            <p className={styles.rating}>Great</p>
            <p>You scored higher than {percentile}% of the people who have taken these tests</p>
        </section>
    );
}