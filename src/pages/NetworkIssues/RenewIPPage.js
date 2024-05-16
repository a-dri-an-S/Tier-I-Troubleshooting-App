import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/RenewIPPage.css";

const RenewIPPage = () => {
    return (
        <section className="renew-ip-page">
            <h1 className="renew-ip-title">Release/Renew IP Address</h1>
            <p className="renew-ip-desc">Release and renew IP address with one of the following methods:</p>
            <div className="renew-ip-cards-cont">
                <Link className="link" to="gui/">
                    <div className="renew-ip-card" >
                        <h2 className="renew-ip-card-title">Modem GUI</h2>
                    </div>
                </Link>
                <Link className="link" to="wnds/">
                    <div className="renew-ip-card" >
                        <h2 className="renew-ip-card-title">Windows OS</h2>
                    </div>
                </Link>
                <Link className="link" to="mac/">
                    <div className="renew-ip-card" >
                        <h2 className="renew-ip-card-title">MAC OS</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default RenewIPPage;