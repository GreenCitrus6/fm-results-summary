import styles from './Button.module.css';

interface ComponentProps {
    text: string;
}

export default function Button({ text }: ComponentProps) {
    return(
        <button className={styles.bttn}>
            {text}
        </button>
    );
}