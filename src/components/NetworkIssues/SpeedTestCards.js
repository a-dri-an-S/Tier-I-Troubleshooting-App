import TSCardBackButton from "../TroubleshootingCards/TSCardBackButton";

import "../../styles/NetworkIssues/SpeedTestCards.css";

const RunASpeedTest = ({ handleSpeedTestSelect, handleTSCardsBackButton }) => {
    return (
        <div className="speed-test-cards-sect">
            <h1 className="speed-test-cards-title">Run A Speed Test</h1>
            <li className="speed-test-title-desc">Run a speed test in ESVT to confirm speed issues</li>
            <div className="speed-test-cards-cont">
                <div
                    className="speed-test-card"
                    id="0"
                    onClick={(e) => handleSpeedTestSelect(e)}
                >
                    <h2 className="speed-test-card-title">Speed Test Fails to Run Assessment</h2>
                </div>
                <div
                    className="speed-test-card"
                    id="1"
                    onClick={(e) => handleSpeedTestSelect(e)}
                >
                    <h2 className="speed-test-card-title">Speed Test Confirms Slow Speeds</h2>
                </div>
                <div
                    className="speed-test-card"
                    id="2"
                    onClick={(e) => handleSpeedTestSelect(e)}
                >
                    <h2 className="speed-test-card-title">Speed Test Return's Advertised Speeds</h2>
                </div>
            </div>
            <TSCardBackButton handleBackButton={handleTSCardsBackButton} />
        </div>
    );
}

export default RunASpeedTest;