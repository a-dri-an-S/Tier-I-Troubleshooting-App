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
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, check if the grounding source is approved and if the connections have been replaced.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If they haven't, please verify ground source and replace all grounding connections.</li>
                            <li className="troubleshoot-list-item-item">If they have and issues persists, issue could be site specific. (ex. power issues)</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default ReplaceCable;