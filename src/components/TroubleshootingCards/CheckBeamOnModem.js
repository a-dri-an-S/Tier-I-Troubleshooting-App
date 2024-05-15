import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css";

const CheckBeamOnModem = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for Correct Beam Assignment</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the tech is on the wrong beam.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If the modem is on the wrong beam, have the tech input the correct modem key.</li>
                            <li className="troubleshoot-list-item-item">Point and peak the TRIA to get modem on the correct beam.</li>
                        </ul>
                        <li className="troubleshoot-list-item">
                        If the tech is on the right beam, please move on to the other troubleshooting steps.
                    </li>
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckBeamOnModem;