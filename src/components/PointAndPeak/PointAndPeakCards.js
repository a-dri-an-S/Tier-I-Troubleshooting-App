import "../../styles/PointAndPeak/PointAndPeakCards.css"

const PointAndPeakCards = ({ handlePointAndPeakSelect }) => {
    return (
        <div className="pnp-cards-sect">
            <h1 className="pnp-cards-title">Point and Peak</h1>
            <div className="pnp-cards-cont">
                <div
                    className="pnp-card"
                    id="0"
                    onClick={(e) => handlePointAndPeakSelect(e)}
                >
                    <h2 className="pnp-card-title">No TRIA Tones</h2>
                </div>
                <div
                    className="pnp-card"
                    id="1"
                    onClick={(e) => handlePointAndPeakSelect(e)}
                >
                    <h2 className="pnp-card-title">Unable to find the satellite or beam</h2>
                </div>
                <div
                    className="pnp-card"
                    id="2"
                    onClick={(e) => handlePointAndPeakSelect(e)}
                >
                    <h2 className="pnp-card-title">Unable to achieve modem lock <br />(Can't get past network entry)</h2>
                </div>
            </div>
        </div>
    );
}

export default PointAndPeakCards;