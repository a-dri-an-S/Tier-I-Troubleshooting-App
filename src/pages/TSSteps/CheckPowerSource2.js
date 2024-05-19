import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckPowerSource2 = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check the Power Source</h1>
            
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check where the power supply is plugged in.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Have the tech confirm if its plugged into a power strip or a surge protector.</li>
                            <li className="troubleshoot-list-item-item">If it is plugged into either, have them plug directly into a power outlet.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Test a different outlet.
                    </li>
                    <li className="troubleshoot-list-item">
                        Test a different power outlet on a different circuit.
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

export default CheckPowerSource2;