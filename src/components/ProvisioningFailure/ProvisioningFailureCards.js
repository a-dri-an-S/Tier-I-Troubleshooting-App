import "../../styles/ProvisioningFailure/ProvisioningFailureCards.css";


const ProvisioningFailureCards = ({ handleProvisioningFailureSelect }) => {
    return (
        <div className="provisioning-failure-cards-sect">
            <h1 className="provisioning-failure-title">Provisioning Failure</h1>
            <div className="provisioning-failure-cards-cont">
                <div
                    className="provisioning-failure-card"
                    id="0"
                    onClick={(e) => handleProvisioningFailureSelect(e)}
                >
                    <h2 className="provisioning-failure-card-title">Modem Status Light: Red</h2>
                </div>
                <div
                    className="provisioning-failure-card"
                    id="1"
                    onClick={(e) => handleProvisioningFailureSelect(e)}
                >
                    <h2 className="provisioning-failure-card-title">Modem Status Light: <br/>Flashing White</h2>
                </div>
                <div
                    className="provisioning-failure-card"
                    id="2"
                    onClick={(e) => handleProvisioningFailureSelect(e)}
                >
                    <h2 className="provisioning-failure-card-title">Modem Status Light: Blue</h2>
                </div>

            </div>
        </div>
    );
}

export default ProvisioningFailureCards;