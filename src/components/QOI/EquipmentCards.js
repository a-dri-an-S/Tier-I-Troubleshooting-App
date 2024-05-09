import "../../styles/QOI/EquipmentCards.css";

const EquipmentCards = ({ handleEquipmentSelect }) => {
    return (
        <div className="equip-cards-sect">
            <h1 className="modem-offline-cards-title">Equipment (Cable and ODU)</h1>
            <div className="equip-cards-cont">
                <div 
                    className="equip-card"
                    id="0"
                    onClick={(e) => handleEquipmentSelect(e)}
                >
                    <h2 className="equip-card-title">Check the Cable Run</h2>
                </div>
                <div 
                    className="equip-card"
                    id="1"
                    onClick={(e) => handleEquipmentSelect(e)}
                >
                    <h2 className="modem-offline-card-title">Check the Ground</h2>
                </div>
                <div 
                    className="equip-card"
                    id="2"
                    onClick={(e) => handleEquipmentSelect(e)}
                >
                    <h2 className="equip-card-title">Short Cable Test</h2>
                </div>
                <div 
                    className="equip-card"
                    id="3"
                    onClick={(e) => handleEquipmentSelect(e)}
                >
                    <h2 className="equip-card-title">Replace the Cable</h2>
                </div>
            </div>

        </div>
    );
}
 
export default EquipmentCards;