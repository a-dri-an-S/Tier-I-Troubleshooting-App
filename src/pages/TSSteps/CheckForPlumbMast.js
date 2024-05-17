import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckForPlumbMast = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check for a Plumb Mast</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If the mast is not plumb (straight up and down), have the tech 'straighten' the mast on the mount.
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

export default CheckForPlumbMast;