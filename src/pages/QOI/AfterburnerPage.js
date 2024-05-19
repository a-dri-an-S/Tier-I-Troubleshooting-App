import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/AfterburnerPage.css";

const AfterburnerPage = ({ toggleDark }) => {

    const toggleTitle = `ab-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `ab-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <div className="ab-page">
            <h1 className={toggleTitle}>Antenna Pointing - Afterburner</h1>
            <div className="ab-cards-cont">
                <Link className="link" to="pnpstps/">
                    <div className={toggleCard} >
                        <h2 className="ab-card-title">Point and Peak Steps </h2>
                    </div>
                </Link>
                <Link className="link" to="pkext/">
                    <div className={toggleCard} >
                        <h2 className="ab-card-title">Peak and Exit Variance Above .3</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default AfterburnerPage;