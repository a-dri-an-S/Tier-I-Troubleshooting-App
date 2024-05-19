import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/SoftwarePage.css";

const SoftwareCards = ({ toggleDark }) => {

    const toggleTitle = `software-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `software-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="software-page">
            <h1 className={toggleTitle}>Software</h1>
            <div className="software-cards-cont">
                <Link className="link" to="pwrcycl/">
                    <div className={toggleCard} >
                        <h2 className="software-card-title">Power Cycle Modem</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default SoftwareCards;