import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css";

const ReplaceCable = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Replace the Cable</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Replace cable run with new, approved cable and connectors.
                    </li>

                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default ReplaceCable;