import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const SwapTRIA2 = () => {
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
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton />
        </div>
    );
}

export default SwapTRIA2;