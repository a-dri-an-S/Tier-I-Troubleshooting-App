import { Link } from "react-router-dom";
import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForLowSignal = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check for a Low Signal</h1>
            <div className={toggleCard}>
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
                        If tech is unable to resolve low signal with re-pointing and peaking, please move onto Antenna Pointing troubleshooting
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">
                                <Link className="ts-link" to="/qoi/ap/">
                                    Go To 🠮 Antenna Pointing
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If their are no signal issues affecting the customers network, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckForLowSignal;