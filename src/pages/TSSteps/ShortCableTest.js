import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const ShortCableTest = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Short Cable Test</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Perform a short cable test.
                    </li>
                    <li className="troubleshoot-list-item">
                        Cable bypassing the ground block, directly connected between the modem and TRIA.
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

export default ShortCableTest;