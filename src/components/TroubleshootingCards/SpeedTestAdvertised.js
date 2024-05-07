import "../../styles/TroubleshootCard.css"

const SpeedTestAdvertised = () => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Speed Test Return's Advertised Speeds</h1>
            <div className="troubleshoot-card">
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        If speed test returns advertised speeds, check if the slow speeds are over Wi-Fi or ethernet connection. 
                    </li>
                    <li className="troubleshoot-list-item">
                        WiFi: If speeds are slow over WiFi, get device connected in closer proximity to modem.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Customer can also purchase a separate router to connect to modem for connecting over WiFi.</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Ethernet: If speeds are slow over ethernet, test a different ethernet cable or device.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Swap with a new modem, if needed.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SpeedTestAdvertised;