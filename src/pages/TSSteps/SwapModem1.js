import { Link } from "react-router-dom";
import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const SwapModem1 = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;
    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Swap Modem</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Swap with a new modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light is blue, please have the tech continue with activating the modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light is flash white, please refer to Modem Lock troubleshooting.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">
                                <Link className="ts-link" to="/pnp/mdmlck/">
                                    Go To🠮Point and Peak: Modem Lock
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light continues red, please continue with 'Modem Offline' troubleshooting steps.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If modem status light continues red, please continue with the other troubleshooting steps.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default SwapModem1;