import "../styles/MainView.css";

const MainView = ({ handleSelectedMainCard }) => {
    return (
        <main className="main-view">
            <header className="main-header">
                <h1 className="main-title">IR Troubleshooting Tool</h1>
            </header>
            <div className="main-cards-sect">
                <div
                    className="main-card"
                    id="0"
                    onClick={(e => handleSelectedMainCard(e))}
                >
                    <h2 className="card-title">Modem Issues</h2>
                </div>
                <div
                    className="main-card"
                    id="1"
                    onClick={(e => handleSelectedMainCard(e))}
                >
                    <h2 className="card-title">Network Issues</h2>
                </div>
                <div
                    className="main-card"
                    id="2"
                    onClick={(e => handleSelectedMainCard(e))}
                >
                    <h2 className="card-title">Point and Peak</h2>
                </div>
                <div
                    className="main-card"
                    id="3"
                    onClick={(e => handleSelectedMainCard(e))}
                >
                    <h2 className="card-title">Provisioning Failure</h2>
                </div>
                <div
                    className="main-card"
                    id="4"
                    onClick={(e => handleSelectedMainCard(e))}
                >
                    <h2 className="card-title">Quality of Install <br />(QOI)</h2>
                </div>
            </div>
        </main>
    );
}

export default MainView;