import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/EthPortsPage.css";

const EthPortsPage = () => {
    return (
        <section className="eth-ports-page">
            <h1 className="eth-ports-title">Ethernet Ports Not Working</h1>
            <div className="eth-ports-cards-cont">
                <div
                    className="eth-ports-card"
                    id="0"
                >
                    <h2 className="eth-ports-card-title">Reboot Modem</h2>
                </div>
                <div
                    className="eth-ports-card"
                    id="1"
                >
                    <h2 className="eth-ports-card-title">Test all ethernet ports</h2>
                </div>
                <div
                    className="eth-ports-card"
                    id="2"
                >
                    <h2 className="eth-ports-card-title">Test ethernet ports with different ethernet cable</h2>
                </div>
                <div
                    className="eth-ports-card"
                    id="3"
                >
                    <h2 className="eth-ports-card-title">Test ethernet ports with different device</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default EthPortsPage;