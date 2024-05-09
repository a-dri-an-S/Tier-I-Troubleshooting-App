import "../../styles/QOI/QOICards.css";

const QOICards = ({ handleQOISelect }) => {
    return (
        <div className="qoi-cards-sect">
            <h1 className="qoi-title">Quality of Install(QOI)</h1>
            <div className="qoi-cards-cont">
                <div
                    className="qoi-card"
                    id="0"
                    onClick={(e) => handleQOISelect(e)}
                >
                    <h2 className="qoi-card-title">Antenna Pointing</h2>
                </div>
                <div
                    className="qoi-card"
                    id="1"
                    onClick={(e) => handleQOISelect(e)}
                >
                    <h2 className="qoi-card-title">Equipment (Cable and ODU)</h2>
                </div>
                <div
                    className="qoi-card"
                    id="2"
                    onClick={(e) => handleQOISelect(e)}
                >
                    <h2 className="qoi-card-title">Software</h2>
                </div>
                <div
                    className="qoi-card"
                    id="3"
                    onClick={(e) => handleQOISelect(e)}
                >
                    <h2 className="qoi-card-title">Installed Devices</h2>
                </div>
            </div>
        </div>
    );
}

export default QOICards;