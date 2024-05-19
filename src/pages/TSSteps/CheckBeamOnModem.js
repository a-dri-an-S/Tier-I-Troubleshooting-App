import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckBeamOnModem = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check if Modem is Locked on Assigned Beam</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the tech is on the wrong beam, the tech will need to correct it.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If the modem is on the wrong beam, have the tech input the correct modem key.</li>
                            <li className="troubleshoot-list-item-item">Point and peak the TRIA to get modem on the correct beam.</li>
                        </ul>
                        <li className="troubleshoot-list-item">
                        If the tech is on the right beam, please move on to the other troubleshooting steps.
                    </li>
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckBeamOnModem;