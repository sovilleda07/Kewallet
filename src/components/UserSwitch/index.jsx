import styles from './userSwitch.module.css';
import Avatar from '../../assets/avatar.jpg';
// Importar íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserSwitch() {
    return (
        <div className={styles.user}>
            <div className={styles.icons}>
                <FontAwesomeIcon icon="fa-power-off" />
                <FontAwesomeIcon icon="fa-search" />
                <FontAwesomeIcon icon="fa-shopping-bag" />
            </div>
            <div className={styles.switch}>
                <div className={styles.avatar}>
                    {/* Avatar: nombre de la variable para la imagen */}
                    <img src={Avatar} width={24} height={24} />
                </div>
                <span className={styles.username}>Sonia Villeda</span>
            </div>
        </div>
    );
}

export default UserSwitch;
