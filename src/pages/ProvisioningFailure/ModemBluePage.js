// import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ProvisioningFailure/ModemBluePage.css";

const ModemBluePage = () => {
    return (
        <section className="modem-blue-page">
            <h1 className="modem-blue-title">Modem Status Light: Blue</h1>
            <div className="modem-blue-cards-cont">
                <div className="modem-blue-card" >
                    <h2 className="modem-blue-card-title">Check for Outages</h2>
                </div>
                <div className="modem-blue-card" >
                    <h2 className="modem-blue-card-title">Check CRM for Account Errors</h2>
                </div>
                <div className="modem-blue-card" >
                    <h2 className="modem-blue-card-title">VTT Activation - Connection Issues</h2>
                </div>
                <div className="modem-blue-card" >
                    <h2 className="modem-blue-card-title">VTT Activation - Other Issues</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default ModemBluePage;