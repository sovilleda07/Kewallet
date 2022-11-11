import styles from './balance.module.css';
import clsx from 'clsx';
import Account from './components/Account';

function Balance({ className }) {
    return (
        <div className={clsx(styles.balance, className)}>
            {/* Encabezado */}
            <div className={styles.head}>
                <span>My balance </span>
                <div className={styles.selector}>
                    <select>
                        <option value="">Select Range</option>
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="last-3-days">Last 3 days</option>
                    </select>
                </div>
            </div>
            {/* Cards de accounts */}
            <div className={styles.accounts}>
                <Account 
                    title="Available Balance"
                    growthValue="2.0"
                    total="45000"
                    currency="USD"
                />
                <Account 
                    title="Available Balance"
                    growthValue="2.0"
                    total="45000"
                    currency="USD"
                    active
                />
            </div>
        </div>
    );
}

export default Balance;
