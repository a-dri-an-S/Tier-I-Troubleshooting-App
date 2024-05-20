import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/SlowSpeedsPage.css";

const SlowSpeedsCards = ({ toggleDark }) => {

    const toggleTitle = `slow-speeds-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `slow-speeds-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="slow-speeds-page">
            <h1 className={toggleTitle}>Slow Speeds</h1>
            <div className="slow-speeds-cards-cont">
                <Link className="link" to="datause/">
                    <div className={toggleCard} >
                        <h2 className="slow-speeds-card-title">Check Customer's Data Use</h2>
                    </div>
                </Link>
                <Link className="link" to="lowsgnl/">
                    <div className={toggleCard} >
                        <h2 className="slow-speeds-card-title">Check for Low Signal</h2>
                    </div>
                </Link>
                <Link className="link" to="spdtst/">
                    <div className={toggleCard} >
                        <h2 className="slow-speeds-card-title">Run a Speed Test</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default SlowSpeedsCards;