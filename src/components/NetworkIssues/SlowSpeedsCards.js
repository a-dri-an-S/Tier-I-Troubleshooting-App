import CardBackButton from "../CardBackButton";

import "../../styles/NetworkIssues/SlowSpeedsCards.css";

const SlowSpeedsCards = ({ handleSlowSpeedsSelect, handleCardsBackButton }) => {
    return (
        <div className="slow-speeds-cards-sect">
            <h1 className="slow-speeds-cards-title">Slow Speeds</h1>
            <div className="slow-speeds-cards-cont">
                <div 
                    className="slow-speeds-card"
                    id="0"
                    onClick={(e) => handleSlowSpeedsSelect(e)}
                >
                    <h2 className="slow-speeds-card-title">Check Customer's Data Use</h2>
                </div>
                <div 
                    className="slow-speeds-card"
                    id="1"
                    onClick={(e) => handleSlowSpeedsSelect(e)}
                >
                    <h2 className="slow-speeds-card-title">Check for Low Signal</h2>
                </div>
                <div 
                    className="slow-speeds-card"
                    id="2"
                    onClick={(e) => handleSlowSpeedsSelect(e)}
                >
                    <h2 className="slow-speeds-card-title">Run a Speed Test</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton}/>
        </div>
    );
}

export default SlowSpeedsCards;