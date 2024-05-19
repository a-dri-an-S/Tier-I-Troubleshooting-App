import { Link } from "react-router-dom";
import "../styles/MainPage.css";

const MainView = ({ toggleDark }) => {

    const toggleTitle = `main-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `main-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <main className="main-page">
            <header className="main-header">
                <h1 className={toggleTitle}>IR Troubleshooting Tool</h1>
            </header>
            <div className="main-cards-sect">
                <Link className="link" to="modem/">
                    <div className={toggleCard}>
                        <h2 className="card-title">Modem Issues</h2>
                    </div>
                </Link>
                <Link className="link" to="network/">
                    <div className={toggleCard}>
                        <h2 className="card-title">Network Issues</h2>
                    </div>
                </Link>
                <Link className="link" to="pnp/">
                    <div className={toggleCard}>
                        <h2 className="card-title">Point and Peak</h2>
                    </div>
                </Link>
                <Link className="link" to="provisioning/">
                    <div className={toggleCard} >
                        <h2 className="card-title">Provisioning Failure</h2>
                    </div>
                </Link>
                <Link className="link" to="qoi/">
                    <div className={toggleCard} >
                        <h2 className="card-title">Quality of Install <br />(QOI)</h2>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default MainView;