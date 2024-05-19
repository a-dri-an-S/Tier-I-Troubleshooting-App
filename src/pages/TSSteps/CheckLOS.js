import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckLOS = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check Line of Sight(LOS)</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check the LOS for any obstructions.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If there are any issues with LOS, the tech will need to work on clearing the obstructions.</li>
                            <li className="troubleshoot-list-item-item">If its a new install, check uploaded photos in the FSM work order or have the tech upload one.</li>
                            <li className="troubleshoot-list-item-item">If its a service call work order, check the original install work order uploaded photos or have the tech upload one.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If there are no issues with the LOS, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckLOS;