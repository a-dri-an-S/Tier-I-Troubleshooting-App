import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckDataUse = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check Customer's Data Use</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check ESVT to see if customer has gone over their data limit.
                    </li>
                    <li className="troubleshoot-list-item">
                        If the customer has gone over their data limit, they will have to wait until their data use resets.
                    </li>
                    <li className="troubleshoot-list-item">
                        If the customer is on an Unleashed Plan, the current data limit is 850gb.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If on an Unleashed Plan and over the data limit, the customer will have to use less data until their data use trends below 850gb.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If the customer is under their Data Allowance (DAP), please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckDataUse;