import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const ReplaceCable = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Replace the Cable</h1>
            <div className={toggleCard}>
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
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default ReplaceCable;