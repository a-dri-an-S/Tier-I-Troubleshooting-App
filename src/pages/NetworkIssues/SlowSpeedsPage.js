import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/SlowSpeedsPage.css";

const SlowSpeedsCards = () => {
    return (
        <section className="slow-speeds-page">
            <h1 className="slow-speeds-title">Slow Speeds</h1>
            <div className="slow-speeds-cards-cont">
                <Link className="link" to="datause/">
                    <div className="slow-speeds-card" >
                        <h2 className="slow-speeds-card-title">Check Customer's Data Use</h2>
                    </div>
                </Link>

                <Link className="link" to="lowsgnl/">
                    <div className="slow-speeds-card" >
                        <h2 className="slow-speeds-card-title">Check for Low Signal</h2>
                    </div>
                </Link>

                <Link className="link" to="spdtst/">
                    <div className="slow-speeds-card" >
                        <h2 className="slow-speeds-card-title">Run a Speed Test</h2>
                    </div>
                </Link>

            </div>
            <GoBackButton />
        </section>
    );
}

export default SlowSpeedsCards;