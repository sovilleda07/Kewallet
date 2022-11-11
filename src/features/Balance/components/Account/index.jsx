import styles from './account.module.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Propiedad active para cambiar color de account
function Account({
    title,
    growthValue,
    total,
    currency,
    icon,
    color,
    active = false,
}) {
    // Evaluar si el porcentaje es positivo o negativo para establecer el color e ícono
    const positiveGrowthValue = Math.floor(growthValue) > 0 ? true : false;

    return (
        // Cuando sea activo añadir clase active para estilos adicionales
        <div
            className={clsx(styles.account, {
                [styles.active]: active,
            })}
        >
            {/* Color condicional según nombre de la clase que se envía por props */}
            <div className={clsx(styles.icon, styles[color])}>
                <FontAwesomeIcon icon={icon} color="black" />
            </div>
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
            {/* Porcentaje */}
            <div
                className={clsx(styles.percentage, {
                    [styles.positive]: positiveGrowthValue,
                    [styles.secondary]: !positiveGrowthValue,
                })}
            >
                <FontAwesomeIcon
                    icon={positiveGrowthValue ? 'fa-arrow-up' : 'fa-arrow-down'}
                />
                {growthValue}%
            </div>
        </div>
    );
}

export default Account;
