import "../../styles/TroubleshootCard.css"


const RebootFactoryResetModem = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Reboot or Factory Reset Modem</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Reboot modem by unplugging the power supply from power source, then reconnecting.
                    </li>
                    <li className="troubleshoot-list-item">
                        Factory reset modem by holding down the reset button on the back of the modem for 60 seconds.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RebootFactoryResetModem;