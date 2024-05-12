import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css"

const ViasatShieldPremium = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Check for Viasat Shield Premium</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                    Viasat Shield Premium only applies to Viasat 2 accounts with an active modem.
                </li>
                <li className="troubleshoot-list-item">
                    Check the customers account in CRM under 'All Line Items' in the 'Support' tab.
                </li>
                <li className="troubleshoot-list-item">
                    Look for Viasat Shield Premium add-on and check if its active.
                </li>
                <li className="troubleshoot-list-item">
                    If Viasat Shield Premium active on the account, customer will need to troubleshoot the app to allow devices on their network.
                </li>
                <li className="troubleshoot-list-item">
                    Customer can call CARE for Viasat Shield app assistance.
                </li>
            </ul>
        </div>
        <TSCardBackButton handleBackButton={handleBackButton} />
    </div>
    );
}

export default ViasatShieldPremium;