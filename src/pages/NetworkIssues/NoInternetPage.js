import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/NoInternetPage.css";

const NoInternetPage = ({ toggleDark }) => {

    const toggleTitle = `no-internet-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `no-internet-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="no-internet-page">
            <h1 className={toggleTitle}>No Internet Connection</h1>
            <div className="no-internet-cards-cont">
                <Link className="link" to="fctrstmdm/">
                    <div
                        className={toggleCard} >
                        <h2 className="no-internet-card-title">Reboot or Factory Reset Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="rnwip/">
                    <div
                        className={toggleCard} >
                        <h2 className="no-internet-card-title">Release/Renew IP Address</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default NoInternetPage;