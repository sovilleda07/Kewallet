import styles from './balance.module.css';
import clsx from 'clsx';
import Account from './components/Account';

function Balance({ className }) {
    return (
        <div className={clsx(styles.balance, className)}>
            {/* Encabezado */}
            <div className={styles.head}>
                <span className={styles.title}>My Balance </span>
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
                    total="$43,781"
                    currency="USD"
                    icon="fa-seedling"
                    color="primary"
                />
                <Account
                    title="Pending"
                    growthValue="-4.0"
                    total="$865.00"
                    currency="USD"
                    icon="fa-money-bill-alt"
                    color="secondary"
                    active
                />
            </div>
        </div>
    );
}

export default Balance;
