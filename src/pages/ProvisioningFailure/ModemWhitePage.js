// import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ProvisioningFailure/ModemWhitePage.css";


const ModemWhitePage = () => {
    return (
        <section className="modem-white-page">
            <h1 className="modem-white-title">Modem Status Light: Flashing White</h1>
            <div className="modem-white-cards-cont">
                <div className="modem-white-card" >
                    <h2 className="modem-white-card-title">Point And Peak</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default ModemWhitePage;