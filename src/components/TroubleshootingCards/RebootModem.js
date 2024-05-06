import "../../styles/TroubleshootCard.css"


const RebootModem = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Reboot Modem</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech reboot the modem on site or reboot through ESVT.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RebootModem;