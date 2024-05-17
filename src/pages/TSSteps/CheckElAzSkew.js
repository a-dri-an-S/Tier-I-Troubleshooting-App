import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckElAzSkew = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check Elevation, Azimuth and Skew</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If any are incorrect, have tech correct it and try again.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Use the Viasat Tech Tools app 'Satellite Finder' to help correct.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default CheckElAzSkew;