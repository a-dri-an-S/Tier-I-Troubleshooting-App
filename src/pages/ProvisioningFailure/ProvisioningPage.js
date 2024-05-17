import { Link } from "react-router-dom";
import "../../styles/ProvisioningFailure/ProvisioningPage.css";

const ProvisioningPage = () => {
    return (
        <section className="provisioning-page">
            <h1 className="provisioning-title">Provisioning Failure</h1>
            <div className="provisioning-cards-cont">

                <Link className="link" to="mdmred/">
                    <div className="provisioning-card" >
                        <h2 className="provisioning-card-title">Modem Status Light: Red</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmwht/">
                    <div className="provisioning-card" >
                        <h2 className="provisioning-card-title">Modem Status Light: <br />Flashing White</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmblu/">
                    <div className="provisioning-card" >
                        <h2 className="provisioning-card-title">Modem Status Light: Blue</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default ProvisioningPage;