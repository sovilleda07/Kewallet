import styles from './App.module.css';
import Container from './components/Container';
import Header from './components/partials/Header';
// Features
import Balance from './features/Balance';

function App() {
    return (
        // Fragmento para englobar los dos div
        <>
            <Header />
            <main>
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
