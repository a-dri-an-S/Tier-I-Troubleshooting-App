// import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/PnPStepsPage.css";

const PnPStepsPage = () => {
    return (
        <section className="pnp-steps-page">
            <h1 className="pnp-steps-title">Point and Peak Steps</h1>
            <div className="pnp-steps-cards-cont">
                <div className="pnp-steps-card" >
                    <h2 className="pnp-steps-card-title">Point and Peak</h2>
                </div>
                <div className="pnp-steps-card" >
                    <h2 className="pnp-steps-card-title">Swap TRIA</h2>
                </div>
                <div className="pnp-steps-card" >
                    <h2 className="pnp-steps-card-title">Swap Modem</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default PnPStepsPage;