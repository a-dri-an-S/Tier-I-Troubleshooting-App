import CardBackButton from "../CardBackButton";

import "../../styles/QOI/PnPStepsCards.css";

const PnPStepsCards = ({ handlePnPStepsSelect, handleTSCardsBackButton }) => {
    return (
        <div className="pnp-steps-cards-sect">
            <h1 className="pnp-steps-cards-title">Point and Peak Steps</h1>
            <div className="pnp-steps-cards-cont">
                <div
                    className="pnp-steps-card"
                    id="0"
                    onClick={(e) => handlePnPStepsSelect(e)}
                >
                    <h2 className="pnp-steps-card-title">Point and Peak</h2>
                </div>
                <div
                    className="pnp-steps-card"
                    id="1"
                    onClick={(e) => handlePnPStepsSelect(e)}
                >
                    <h2 className="pnp-steps-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="pnp-steps-card"
                    id="2"
                    onClick={(e) => handlePnPStepsSelect(e)}
                >
                    <h2 className="pnp-steps-card-title">Swap Modem</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleTSCardsBackButton} />
        </div>
    );
}

export default PnPStepsCards;