import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const PowerCycleModem = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Power Cycle Modem</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech unplug the modem for 3 minutes from it power source. After 3 mins, plug modem power supply back into power outlet.
                    </li>
                    <li className="troubleshoot-list-item">
                        If software loaded on modem is a version known to have issues, escalate to Tier II for TAC support", "(ex. SPOCK_3.7.4.7.88)
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not start the software to download, please escalate to Tier II for TAC support
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default PowerCycleModem;