import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const PointAndPeak = () => {
    return (
        <div className="troubleshoot-sect">
        <h1 className="troubleshoot-title">Point and Peak</h1>
        <div className="troubleshoot-card">
            <ul className="troubleshoot-list">
                <li className="troubleshoot-list-item">
                If the beam the modem is locked to is correct, have the tech re-point and peak the TRIA.
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

export default PointAndPeak;