import styles from './result.module.css';

function Result({ title, data }) {
    return (
        <div className={styles.result}>
            <span className={styles.title}>{title}</span>
            <span className={styles.data}>{data}</span>
        </div>
    );
}

export default Result;
