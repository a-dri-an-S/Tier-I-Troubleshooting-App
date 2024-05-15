import CardBackButton from "../CardBackButton";

import "../../styles/QOI/APAfterburnerCards.css";

const AntennaPointingCards = ({ handleAPAfterburnerSelect, handleCardsBackButton }) => {
    return (
        <div className="ap-afterburner-cards-sect">
            <h1 className="ap-afterburner-cards-title">Antenna Pointing - Afterburner</h1>
            <div className="ap-afterburner-cards-cont">
                <div
                    className="ap-afterburner-card"
                    id="0"
                    onClick={(e) => handleAPAfterburnerSelect(e)}
                >
                    <h2 className="ap-afterburner-card-title">Point and Peak Steps </h2>
                </div>
                <div
                    className="ap-afterburner-card"
                    id="1"
                    onClick={(e) => handleAPAfterburnerSelect(e)}
                >
                    <h2 className="ap-afterburner-card-title">Peak and Exit Variance Above .3</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default AntennaPointingCards;