import CardBackButton from "../CardBackButton";

import "../../styles/QOI/AntennaPointingCards.css";

const AntennaPointingCards = ({ handleAntennaPointingSelect, handleCardsBackButton }) => {
    return (
        <div className="antenna-pointing-cards-sect">
            <h1 className="antenna-pointing-cards-title">Antenna Pointing</h1>
            <div className="antenna-pointing-cards-cont">
                <div
                    className="antenna-pointing-card"
                    id="0"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check if Modem is Locked <br />on Assigned Beam</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="1"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check for Outages</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="2"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check the Power Source</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="3"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check the Line of Sight (LOS)</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="4"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Point and Peak</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="5"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check for Correct Beam Assignment</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="6"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="7"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Swap Modem</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="8"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check the Cable Run</h2>
                </div>
                <div
                    className="antenna-pointing-card"
                    id="9"
                    onClick={(e) => handleAntennaPointingSelect(e)}
                >
                    <h2 className="antenna-pointing-card-title">Check the Reflector</h2>
                </div>
            </div>
            <CardBackButton handleCardsBackButton={handleCardsBackButton} />
        </div>
    );
}

export default AntennaPointingCards;