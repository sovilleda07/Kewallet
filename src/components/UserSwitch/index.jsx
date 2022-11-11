import styles from './userSwitch.module.css'
import Avatar from '../../assets/avatar.jpg';

function UserSwitch() {
  return (
    <div className={styles.switch}>
      <div className={styles.avatar}>
        {/* Avatar: nombre de la variable para la imagen */}
        <img src={Avatar} width={32} height={32} />
      </div>
      <span className={styles.username}>Sonia Villeda</span>
    </div>
  )
}

export default UserSwitch;