import { Link } from "react-router-dom";
import "../styles/MainPage.css";

const MainView = () => {
    return (
        <main className="main-page">
            <header className="main-header">
                <h1 className="main-title">IR Troubleshooting Tool</h1>
            </header>

            <div className="main-cards-sect">
                <Link className="link" to="/modem/">
                    <div className="main-card">
                        <h2 className="card-title">Modem Issues</h2>
                    </div>
                </Link>
                <Link className="link" to="network/">
                    <div className="main-card">
                        <h2 className="card-title">Network Issues</h2>
                    </div>
                </Link>
                <Link className="link" to="pnp/">
                    <div className="main-card">
                        <h2 className="card-title">Point and Peak</h2>
                    </div>
                </Link>
                <Link className="link" to="provisioning/">
                    <div className="main-card" >
                        <h2 className="card-title">Provisioning Failure</h2>
                    </div>
                </Link>
                <Link className="link" to="qoi/">
                    <div className="main-card" >
                        <h2 className="card-title">Quality of Install <br />(QOI)</h2>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default MainView;