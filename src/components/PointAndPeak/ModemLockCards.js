import "../../styles/PointAndPeak/ModemLockCards.css";

const ModemLockCards = ({ handleModemLockSelect }) => {
    return (
        <div className="modem-lock-cards-sect">
            <h1 className="modem-lock-cards-title">Unable to Achieve Modem Lock</h1>
            <p className="modem-lock-title-desc">(Can't get past network entry)</p>
            <div className="modem-lock-cards-cont">
                <div
                    className="modem-lock-card"
                    id="0"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check for Outages</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="1"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check the Modem Key</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="2"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check the Power Source</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="3"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check Elevation, Azimuth and Skew</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="4"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check Line of Sight(LOS)</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="5"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check for a Plumb Mast</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="6"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="7"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Swap Modem</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="8"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check Reflector</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="9"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check for Correct Beam Assignment</h2>
                </div>
                <div
                    className="modem-lock-card"
                    id="10"
                    onClick={(e) => handleModemLockSelect(e)}
                >
                    <h2 className="modem-lock-card-title">Check Cable Run</h2>
                </div>
            </div>

        </div>
    );
}

export default ModemLockCards;