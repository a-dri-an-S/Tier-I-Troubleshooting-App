import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const RebootFactoryResetModem = ({ handleBackButton }) => {
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
                    <li className="troubleshoot-list-item">
                        If a factory reset does not fix the issue, please move on to the other troubleshooting steps for 'No Internet Connection'.
                    </li>
                    <li className="troubleshoot-list-item">
                        If all other troubleshooting steps have been tried, please swap modem.
                    </li>
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />

        </div>
    );
}

export default RebootFactoryResetModem;