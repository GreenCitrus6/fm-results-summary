import styles from "./Card.module.css";
import ResultRecap from "./ResultRecap";
import ResultSummary from "./ResultSummary";

export default function Card() {
    return(
        <section className={styles.card}>
            <ResultRecap/>
            <ResultSummary/>
        </section>
    );
}