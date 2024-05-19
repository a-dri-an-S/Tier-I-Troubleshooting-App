import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";


const DisableBridgeESVT = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
        <h1 className={toggleTitle}>Disable Bridge Mode through ESVT</h1>
        <div className={toggleCard}>
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Modem must be active on the account to disable through ESVT.
                </li>
                <li className="troubleshoot-list-item">
                    In ESVT, set Bridge Mode to disable to turn on the modem's internal router.
                </li>
                <li className="troubleshoot-list-item">
                    When disabled, modem will reboot 2 times within a 15 min window.
                </li>
                <li className="troubleshoot-list-item">
                    If modem is in Bridge Mode and it is not disabling through ESVT, escalate to Tier II for TAC support.
                </li>
            </ul>
        </div>
        <TSGoBackButton toggleDark={toggleDark}/>
    </div>
    );
}

export default DisableBridgeESVT;