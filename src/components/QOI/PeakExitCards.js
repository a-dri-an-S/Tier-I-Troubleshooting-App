import CardBackButton from "../CardBackButton";

import "../../styles/QOI/PeakExitCards.css";

const PeakExitCards = ({ handlePeakExitViewSelect, handleTSCardsBackButton }) => {
    return (
        <div className="peak-exit-cards-sect">
            <h1 className="peak-exit-cards-title">Peak and Exit Variance Above .3</h1>
            <div className="peak-exit-cards-cont">
                <div
                    className="peak-exit-card"
                    id="0"
                    onClick={(e) => handlePeakExitViewSelect(e)}
                >
                    <h2 className="peak-exit-card-title">Check for SAN Outages</h2>
                </div>
                <div
                    className="peak-exit-card"
                    id="1"
                    onClick={(e) => handlePeakExitViewSelect(e)}
                >
                    <h2 className="peak-exit-card-title">Point and Peak</h2>
                </div>
                <div
                    className="peak-exit-card"
                    id="2"
                    onClick={(e) => handlePeakExitViewSelect(e)}
                >
                    <h2 className="peak-exit-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="peak-exit-card"
                    id="3"
                    onClick={(e) => handlePeakExitViewSelect(e)}
                >
                    <h2 className="peak-exit-card-title">Swap Modem</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleTSCardsBackButton}/>
        </div>
    );
}

export default PeakExitCards;