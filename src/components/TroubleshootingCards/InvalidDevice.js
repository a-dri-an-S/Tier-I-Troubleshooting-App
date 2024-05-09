import "../../styles/TroubleshootCard.css"

const InvalidDevice = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Invalid Device</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Connected Device Equal to 0
                    </li>
                    <li className="troubleshoot-list-item">
                        Check if the modem being activated is the correct modem type.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Check the equipment in FSM to make sure it matches with what modem type is connected.</li>
                            <li className="troubleshoot-list-item-item">If it does match, have the tech try running QOI again.</li>
                            <li className="troubleshoot-list-item-item">If it still fails, escalate to Tier II for support.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If the account is a DISH/NRTC wholesale account or a commercial, legacy account and is on VS2, process the override in support portal.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">DISH wholesale/commercial legacy billing accounts start with a 3 and the active modem MAC address only loads in legacy ESVT (esvt.exede.net)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default InvalidDevice;