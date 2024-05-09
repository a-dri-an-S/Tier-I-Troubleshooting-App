import "../../styles/QOI/SoftwareCards.css";

const SoftwareCards = ({ handleSoftwareSelect }) => {
    return (
        <div className="software-cards-sect">
            <h1 className="software-cards-title">Software</h1>
            <div className="software-cards-cont">
                <div 
                    className="software-card"
                    id="0"
                    onClick={(e) => handleSoftwareSelect(e)}
                >
                    <h2 className="software-card-title">Power Cycle Modem</h2>
                </div>
            </div>

        </div>
    );
}

export default SoftwareCards;