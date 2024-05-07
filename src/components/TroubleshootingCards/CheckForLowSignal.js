import "../../styles/TroubleshootCard.css"

const CheckForLowSignal = () => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Check for a Low Signal</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Check ESVT for Antenna Pointing failure.
                </li>
                <li className="troubleshoot-list-item">
                    Check for a low SNR/FL(forward link) or RL(return link), depending on what speeds are being affected.
                    <ul className="troubleshoot-list-item">
                        <li className="troubleshoot-list-item-item">FL/SNR will affect download speeds.</li>
                        <li className="troubleshoot-list-item-item">RL will affect upload speeds.</li>
                    </ul>
                </li>
                <li className="troubleshoot-list-item">
                    If either is failing, have the tech point and peak the TRIA.
                </li>
                <li className="troubleshoot-list-item">
                    OR LINK to QOI - Antenna Pointing
                </li>
            </ul>
        </div>
    </div>
    );
}

export default CheckForLowSignal;