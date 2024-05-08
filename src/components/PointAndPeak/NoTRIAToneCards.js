import "../../styles/PointAndPeak/NoTRIAToneCards.css";

const NoTRIAToneCards = ({ handleNoTRIATonesSelect }) => {
    return (
        <div className="no-tria-tone-cards-sect">
            <h1 className="no-tria-tone-cards-title">No TRIA Tones</h1>
            <div className="no-tria-tone-cards-cont">
                <div
                    className="no-tria-tone-card"
                    id="0"
                    onClick={(e) => handleNoTRIATonesSelect(e)}
                >
                    <h2 className="no-tria-tone-card-title">Check Power Source</h2>
                </div>
                <div
                    className="no-tria-tone-card"
                    id="1"
                    onClick={(e) => handleNoTRIATonesSelect(e)}
                >
                    <h2 className="no-tria-tone-card-title">Swap TRIA</h2>
                </div>
                <div
                    className="no-tria-tone-card"
                    id="2"
                    onClick={(e) => handleNoTRIATonesSelect(e)}
                >
                    <h2 className="no-tria-tone-card-title">Swap Modem</h2>
                </div>
                <div
                    className="no-tria-tone-card"
                    id="3"
                    onClick={(e) => handleNoTRIATonesSelect(e)}
                >
                    <h2 className="no-tria-tone-card-title">Check the Cable Run</h2>
                </div>
            </div>

        </div>
    );
}

export default NoTRIAToneCards;