import styles from './button.module.css';

function Button({ text }) {
    return (
        <button type="button" className={styles.button}>
            {text}
        </button>
    );
}

export default Button;
