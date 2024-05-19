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
                If the beam the modem is locked to is correct, have the tech re-point and peak the TRIA.
                </li>
                <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
            </ul>
        </div>
        <TSGoBackButton toggleDark={toggleDark}/>
    </div>
    );
}

export default PointAndPeak;