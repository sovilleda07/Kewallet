import styles from './header.module.css';
import Logo from '../../Logo';
import Container from '../../Container';
import UserSwitch from '../../UserSwitch';

function Header() {
    return (
        <header className={styles.header}>
            {/* Contenedor para envolver (wrap) al hijo */}
            {/* Div para que envuelva todos los componentes, porque el Container es un componente aparte o pasarle clase al Container*/}
            <Container className={styles.container}>
                {/* className es la propiedad que está esperando el componente */}
                {/* Hijo que se renderiza dentro de container por prop children */}
                <Logo className={styles.logo} />

                {/* Navegación */}
                <nav className={styles.nav}>
                    <li>
                        <a href="#">Share</a>
                    </li>
                    <li>
                        <a href="#">Shooping</a>
                    </li>
                    <li>
                        <a href="#">Cash</a>
                    </li>
                    <li>
                        <a href="#">My Earnings</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                </nav>

                {/* Dropdown */}
                <UserSwitch />
            </Container>
        </header>
    );
}

export default Header;
