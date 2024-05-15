import "../../styles/TroubleshootCard.css"

import TSCardBackButton from "./TSCardBackButton";

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
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default VTTActivationOther;