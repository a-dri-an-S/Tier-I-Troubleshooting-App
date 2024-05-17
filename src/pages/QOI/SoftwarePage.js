import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/SoftwarePage.css";

const SoftwareCards = () => {
    return (
        <div className="software-page">
            <h1 className="software-title">Software</h1>
            <div className="software-cards-cont">
                <div className="software-card" >
                    <h2 className="software-card-title">Power Cycle Modem</h2>
                </div>
            </div>
            <GoBackButton />
        </div>
    );
}

export default SoftwareCards;