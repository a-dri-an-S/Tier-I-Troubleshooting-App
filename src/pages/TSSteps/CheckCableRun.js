import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckCableRun = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check the Cable Run</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check for the correct cable type and length.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.</li>
                            <li className="troubleshoot-list-item-item">Cable length should not exceed 150ft.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Check for any physical cable damage.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Replace with the correct cable type, if needed</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Check the connectors.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Make sure they are fit tight and not damaged.</li>
                            <li className="troubleshoot-list-item-item">Connectors should be approved, weather sealed, RG6 compatible.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Perform a short cable test
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Cable bypassing the ground block, directly connected between the modem and TRIA.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default CheckCableRun;