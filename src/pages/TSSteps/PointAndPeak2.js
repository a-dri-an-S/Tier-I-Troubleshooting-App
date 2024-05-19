import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const PointAndPeak = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Point and Peak</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Have the tech point and peak the TRIA.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light stays red after pointing and peaking, please refer to the modem issues troubleshooting.", "LINK - Modem Issues: Modem Offline
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light turns blue, please have the tech continue with activating the modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light continues to flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default PointAndPeak;