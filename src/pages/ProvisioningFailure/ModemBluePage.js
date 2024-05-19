import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ProvisioningFailure/ModemBluePage.css";

const ModemBluePage = ({ toggleDark }) => {

    const toggleTitle = `modem-blue-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `modem-blue-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="modem-blue-page">
            <h1 className={toggleTitle}>Modem Status Light: Blue</h1>
            <div className="modem-blue-cards-cont">
                <Link className="link" to="chkoutg/">
                    <div className={toggleCard} >
                        <h2 className="modem-blue-card-title">Check for Outages</h2>
                    </div>
                </Link>
                <Link className="link" to="errs/">
                    <div className={toggleCard} >
                        <h2 className="modem-blue-card-title">Check CRM for Account Errors</h2>
                    </div>
                </Link>
                <Link className="link" to="vttcon/">
                    <div className={toggleCard} >
                        <h2 className="modem-blue-card-title">VTT Activation - Connection Issues</h2>
                    </div>
                </Link>
                <Link className="link" to="vttoth/">
                    <div className={toggleCard} >
                        <h2 className="modem-blue-card-title">VTT Activation - Other Issues</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default ModemBluePage;