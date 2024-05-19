import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/PnPStepsPage.css";

const PnPStepsPage = ({ toggleDark }) => {

    const toggleTitle = `pnp-steps-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `pnp-steps-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="pnp-steps-page">
            <h1 className={toggleTitle}>Point and Peak Steps</h1>
            <div className="pnp-steps-cards-cont">
                <Link className="link" to="pnp/">
                    <div className={toggleCard} >
                        <h2 className="pnp-steps-card-title">Point and Peak</h2>
                    </div>
                </Link>
                <Link className="link" to="swptria/">
                    <div className={toggleCard} >
                        <h2 className="pnp-steps-card-title">Swap TRIA</h2>
                    </div>
                </Link>
                <Link className="link" to="swpmdm/">
                    <div className={toggleCard} >
                        <h2 className="pnp-steps-card-title">Swap Modem</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default PnPStepsPage;