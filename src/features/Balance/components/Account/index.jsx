import styles from './account.module.css';
import clsx from 'clsx';

console.log(styles);

// Propiedad active para cambiar color de account
function Account({ title, growthValue, total, currency, active = false }) {
    return (
        // Cuando sea activo añadir clase active para estilos adicionales
        <div className={clsx(styles.account, {
            [styles.active]: active,
        })}>
            <div className={styles.icon} />
            <div className={styles.details}>
                <span className={styles.detailsLabel}>{title}</span>
                <div className={styles.detailsNumerics}>
                    <span className={styles.detailsTotal}>{total}</span>
                    <span className={styles.detailsCurrency}>{currency}</span>
                </div>
                <a href="#" className={styles.detailsCta}>
                    View Transactions
                </a>
            </div>
            <span></span>
        </div>
    );
}

export default Account;
