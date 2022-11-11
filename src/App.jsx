import styles from './App.module.css';
import Container from './components/Container';
import Header from './components/partials/Header';
// Features
import Balance from './features/Balance';
// Importar library y los íconos a utilizar en todos los componentes
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckSquare,
    faPowerOff,
    faSearch,
    faShoppingBag,
    faSeedling,
    faMoneyBillAlt,
    faArrowUp,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faCheckSquare,
    faPowerOff,
    faSearch,
    faShoppingBag,
    faSeedling,
    faMoneyBillAlt,
    faArrowUp,
    faArrowDown
);

function App() {
    return (
        // Fragmento para englobar los dos div
        <>
            <Header />
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            <main className={styles.main}>
                <Container>
                    {/* Grid principal */}
                    <div className={styles.grid}>
                        {/* Balance por cada uno de los componentes */}
                        <Balance className={styles.blockBalance} />
                        {/* <Balance className={styles.blockAnalytics} />
                        <Balance className={styles.blockCashOut} /> */}
                    </div>
                </Container>
            </main>
        </>
    );
}

export default App;
