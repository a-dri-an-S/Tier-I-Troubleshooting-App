import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/TroubleshootCard.css"

const VTTActivationOther = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">VTT activation - Other Issues</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Logout and log back into app.
                    </li>
                    <li className="troubleshoot-list-item">
                        Uninstall/reinstall app.
                    </li>
                    <li className="troubleshoot-list-item">
                        Escalate to Tier II for additional troubleshooting.
                    </li>
                </ul>
            </div>
            {/* <button
                className="back-btn-ts-card"
                onClick={() => handleBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button> */}
        </div>
    );
}

export default VTTActivationOther;