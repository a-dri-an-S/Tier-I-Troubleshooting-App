import "../../styles/ProvisioningFailure/ProvisioningPage.css";

const ProvisioningPage = () => {
    return (
        <section className="provisioning-page">
            <h1 className="provisioning-title">Provisioning Failure</h1>
            <div className="provisioning-cards-cont">
                <div
                    className="provisioning-card"
                    id="0"
                >
                    <h2 className="provisioning-card-title">Modem Status Light: Red</h2>
                </div>
                <div
                    className="provisioning-card"
                    id="1"
                >
                    <h2 className="provisioning-card-title">Modem Status Light: <br />Flashing White</h2>
                </div>
                <div
                    className="provisioning-card"
                    id="2"
                >
                    <h2 className="provisioning-card-title">Modem Status Light: Blue</h2>
                </div>
            </div>
        </section>
    );
}

export default ProvisioningPage;