import { Link } from "react-router-dom";
import "../../styles/ProvisioningFailure/ProvisioningPage.css";

const ProvisioningPage = ({ toggleDark }) => {

    const toggleTitle = `provisioning-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `provisioning-card ${toggleDark ? 'dark-card' : 'light-card'}`;
    
    return (
        <section className="provisioning-page">
            <h1 className={toggleTitle}>Provisioning Failure</h1>
            <div className="provisioning-cards-cont">

                <Link className="link" to="mdmred/">
                    <div className={toggleCard} >
                        <h2 className="provisioning-card-title">Modem Status Light: Red</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmwht/">
                    <div className={toggleCard} >
                        <h2 className="provisioning-card-title">Modem Status Light: <br />Flashing White</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmblu/">
                    <div className={toggleCard} >
                        <h2 className="provisioning-card-title">Modem Status Light: Blue</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default ProvisioningPage;