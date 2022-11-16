import styles from './analytic.module.css';
import clsx from 'clsx';
import Result from './components/Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Analytic({ className }) {
    return (
        <div className={clsx(styles.analytics, className)}>
            <div className={styles.date}>
                <div className={styles.title}>
                    <span>Last</span>
                    <span>30 Days</span>
                </div>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon="fas fa-chevron-down" />
                </div>
            </div>
            <div className={styles.results}>
                <Result title="Transactions" data="38" />
                <Result title="Joined Waves" data="+8" />
                <Result title="Earnings" data="$2,400" />
            </div>
        </div>
    );
}

export default Analytic;
