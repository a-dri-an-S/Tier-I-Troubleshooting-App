import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/NoWifiPage.css";

const NoWifiPage = () => {
    return (
        <section className="no-wifi-page">
            <h1 className="no-wifi-title">No Wi-Fi</h1>
            <div className="no-wifi-cards-cont">
                <Link className="link" to="dsbbrgmg/">
                    <div className="no-wifi-card" >
                        <h2 className="no-wifi-card-title">Disable bridge mode (Modem GUI)</h2>
                    </div>
                </Link>
                <Link className="link" to="shdprm/">
                    <div className="no-wifi-card" >
                        <h2 className="no-wifi-card-title">Check for Viasat Shield Premium</h2>
                    </div>
                </Link>
                <Link className="link" to="ssid/">
                    <div className="no-wifi-card" >
                        <h2 className="modem-offline-card-title">Check if WiFi SSID is set to Private</h2>
                    </div>
                </Link>
                <Link className="link" to="dsbbrgesvt/">
                    <div className="no-wifi-card" >
                        <h2 className="no-wifi-card-title">Disable Bridge Mode through ESVT</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default NoWifiPage;