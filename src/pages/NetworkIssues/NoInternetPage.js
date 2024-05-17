import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/NoInternetPage.css";

const NoInternetPage = () => {
    return (
        <section className="no-internet-page">
            <h1 className="no-internet-title">No Internet Connection</h1>
            <div className="no-internet-cards-cont">
                <Link className="link" to="fctrstmdm/">
                    <div
                        className="no-internet-card" >
                        <h2 className="no-internet-card-title">Reboot or Factory Reset Modem</h2>
                    </div>
                </Link>
                <Link className="link" to="rnwip/">
                    <div
                        className="no-internet-card" >
                        <h2 className="no-internet-card-title">Release/Renew IP Address</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default NoInternetPage;