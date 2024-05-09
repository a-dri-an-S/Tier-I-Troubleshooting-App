import "../../styles/TroubleshootCard.css"

const PowerCycleModem = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Power Cycle Modem</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech unplug the modem for 3 minutes from it power source. After 3 mins, plug modem power supply back into power outlet.
                    </li>
                    <li className="troubleshoot-list-item">
                        If software loaded on modem is a version known to have issues, escalate to Tier II for TAC support", "(ex. SPOCK_3.7.4.7.88)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PowerCycleModem;