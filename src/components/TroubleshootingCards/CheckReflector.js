import "../../styles/TroubleshootCard.css"

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
                </ul>
            </div>
        </div>
    );
}

export default CheckReflector;