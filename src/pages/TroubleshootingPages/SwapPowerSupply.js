import "../../styles/TroubleshootPage.css"

import TSGoBackButton from "../../components/TSGoBackButton";

const SwapPowerSupply = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Swap Power Supply</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Swap the power supply on the modem with a new one.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Make sure it's a new power supply.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light is blue, please have the tech continue with activating the modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light is flash white, please refer to Modem Lock troubleshooting.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">LINK - Point and Peak: Modem Lock</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If modem status light continues red, please continue with the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default SwapPowerSupply;