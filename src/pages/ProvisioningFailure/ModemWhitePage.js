import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ProvisioningFailure/ModemWhitePage.css";


const ModemWhitePage = ({ toggleDark }) => {

    const toggleTitle = `modem-white-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `modem-white-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="modem-white-page">
            <h1 className={toggleTitle}>Modem Status Light: Flashing White</h1>
            <div className="modem-white-cards-cont">
                <Link className="link" to="pnp/">
                    <div className={toggleCard} >
                        <h2 className="modem-white-card-title">Point And Peak</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default ModemWhitePage;