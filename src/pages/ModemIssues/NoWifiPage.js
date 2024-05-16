import GoBackButton from "../../components/GoBackButton";
import "../../styles/ModemIssues/NoWifiPage.css";

const NoWifiPage = () => {
    return (
        <section className="no-wifi-page">
            <h1 className="no-wifi-title">No Wi-Fi</h1>
            <div className="no-wifi-cards-cont">
                <div
                    className="no-wifi-card"
                    id="0"
                >
                    <h2 className="no-wifi-card-title">Disable bridge mode (Modem GUI)</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="1"
                >
                    <h2 className="no-wifi-card-title">Check for Viasat Shield Premium</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="2"
                >
                    <h2 className="modem-offline-card-title">Check if WiFi SSID is set to Private</h2>
                </div>
                <div
                    className="no-wifi-card"
                    id="3"
                >
                    <h2 className="no-wifi-card-title">Disable Bridge Mode through ESVT</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default NoWifiPage;