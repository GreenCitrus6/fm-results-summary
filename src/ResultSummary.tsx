import styles from './ResultSummary.module.css';

export default function ResultSummary() {

    return(
        <section className={styles.card}>
            <h2>Summary</h2>
            {/* score breakdown */}
            <button>Continue</button>
        </section>
    );
}