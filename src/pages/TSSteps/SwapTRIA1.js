import { Link } from "react-router-dom";
import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const SwapTRIA1 = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Swap TRIA</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Swap with a new TRIA.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Point and peak the TRIA.</li>
                        </ul>
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
            <TSGoBackButton />
        </div>
    );
}

export default SwapTRIA1;