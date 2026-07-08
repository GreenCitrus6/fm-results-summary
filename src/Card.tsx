import styles from "./Card.module.css";
import ResultRecap from "./ResultRecap";
import ResultSummary from "./ResultSummary";
import data from "./assets/data.json";

export default function Card() {
    return(
        <section className={styles.card}>
            <ResultRecap data={data}/>
            <ResultSummary/>
        </section>
    );
}