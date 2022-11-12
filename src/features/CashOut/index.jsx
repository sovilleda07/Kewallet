import styles from './cashOut.module.css';
import clsx from 'clsx';
import Payment from './components/Payment';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CashOut({ className }) {
    return (
        <div className={clsx(styles.cashOut, className)}>
            {/* Encabezado */}
            <div className={styles.head}>
                <span className={styles.title}>Cash Out</span>
                {/* Ícono */}
                <div className={styles.icon}>
                    <FontAwesomeIcon icon="fa-cog" />
                </div>
            </div>
            {/* Cards de payments */}
            <div className={styles.payments}>
                <Payment
                    icon="fa-university"
                    color="secondary"
                    data="****8462"
                    type="City Bank"
                />
                <Payment
                    icon="fa-money-check"
                    color="primary"
                    data="so_villeda@yahoo.com"
                    type="Paypal"
                />
            </div>
            {/* Button */}
            <div className={styles.button}>
                <Button
                    text="Transfer Amount"
                />
            </div>
            <div className={styles.transfer}>
                <span>*you can transfer amount easily to any of the linked accounts</span>
            </div>
        </div>
    );
}

export default CashOut;

