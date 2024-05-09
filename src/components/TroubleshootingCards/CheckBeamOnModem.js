import "../../styles/TroubleshootCard.css"

const CheckBeamOnModem = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for Correct Beam Assignment</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the tech is on the wrong beam.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If the modem is on the wrong beam, have the tech input the correct modem key.</li>
                            <li className="troubleshoot-list-item-item">Point and peak the TRIA to get modem on the correct beam.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CheckBeamOnModem;