import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckReflector = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check Reflector</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check the reflector for any visible damages, dents or warps.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">If there are any, have the tech swap the reflector.</li>
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

export default CheckReflector;