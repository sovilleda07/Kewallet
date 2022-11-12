import styles from './payment.module.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Payment({ icon, color, data, type }) {
    return (
        <div className={styles.payment}>
            {/* Color condicional según nombre de la clase */}
            <div className={clsx(styles.icon, styles[color])}>
                <FontAwesomeIcon icon={icon} color="black" />
            </div>
            <div className={styles.details}>
                <span className={styles.detailsData}>{data}</span>
                <span className={styles.detailsType}>{type}</span>
            </div>
        </div>
    );
}

export default Payment;
