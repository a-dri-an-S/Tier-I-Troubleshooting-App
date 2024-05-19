import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/RenewIPPage.css";

const RenewIPPage = ({ toggleDark }) => {
    const toggleTitle = `renew-ip-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleDesc = `renew-ip-desc ${toggleDark ? 'dark-desc' : 'light-desc'}`
    const toggleCard = `renew-ip-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="renew-ip-page">
            <h1 className={toggleTitle}>Release/Renew IP Address</h1>
            <p className={toggleDesc}>Release and renew IP address with one of the following methods:</p>
            <div className="renew-ip-cards-cont">
                <Link className="link" to="gui/">
                    <div className={toggleCard} >
                        <h2 className="renew-ip-card-title">Modem GUI</h2>
                    </div>
                </Link>
                <Link className="link" to="wnds/">
                    <div className={toggleCard} >
                        <h2 className="renew-ip-card-title">Windows OS</h2>
                    </div>
                </Link>
                <Link className="link" to="mac/">
                    <div className={toggleCard} >
                        <h2 className="renew-ip-card-title">MAC OS</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default RenewIPPage;