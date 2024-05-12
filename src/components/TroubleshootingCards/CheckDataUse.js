import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const CheckDataUse = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Check Customer's Data Use</h1>
        <div className="troubleshoot-card">
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
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />

    </div>
    );
}

export default CheckDataUse;