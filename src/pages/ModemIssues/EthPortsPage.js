import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/EthPortsPage.css";

const EthPortsPage = ({ toggleDark }) => {

    const toggleTitle = `eth-ports-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `eth-ports-card ${toggleDark ? 'dark-card' : 'light-card'}`;
    
    return (
        <section className="eth-ports-page">
            <h1 className={toggleTitle}>Ethernet Ports Not Working</h1>
            <div className="eth-ports-cards-cont">
                <Link className="link" to="rbtmdm/">
                    <div className={toggleCard} >
                        <h2 className="eth-ports-card-title">Reboot Modem</h2>
                    </div>
                </Link>

                <Link className="link" to="ethprts/">
                    <div className={toggleCard} >
                        <h2 className="eth-ports-card-title">Test all ethernet ports</h2>
                    </div>
                </Link>

                <Link className="link" to="ethcbl/">
                    <div className={toggleCard} >
                        <h2 className="eth-ports-card-title">Test ethernet ports with different ethernet cable</h2>
                    </div>
                </Link>

                <Link className="link" to="difdvc/">
                <div className={toggleCard} >
                    <h2 className="eth-ports-card-title">Test ethernet ports with different device</h2>
                </div>
                </Link>
                
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default EthPortsPage;