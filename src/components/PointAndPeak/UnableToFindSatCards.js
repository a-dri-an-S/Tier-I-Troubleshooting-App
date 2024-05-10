import CardBackButton from "../CardBackButton";

import "../../styles/PointAndPeak/UnableToFindSatCards.css";

const UnableToFindSatCards = ({ handleUnableToFindSatSelect, handleCardsBackButton }) => {
    return (
        <div className="unable-to-find-sat-cards-sect">
            <h1 className="unable-to-find-sat-cards-title">Unable to Find the Satellite or Beam</h1>
            <div className="unable-to-find-sat-cards-cont">
                <div
                    className="unable-to-find-sat-card"
                    id="0"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check the Modem Key</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="1"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check the Power Source</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="2"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check Elevation, Azimuth and Skew</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="3"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check Line of Sight(LOS)</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="4"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check for a Plumb Mast</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="5"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="6"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Swap Modem</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="7"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check Reflector</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="8"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check for Correct Beam Assignment</h2>
                </div>
                <div
                    className="unable-to-find-sat-card"
                    id="9"
                    onClick={(e) => handleUnableToFindSatSelect(e)}
                >
                    <h2 className="unable-to-find-sat-card-title">Check Cable Run</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default UnableToFindSatCards;