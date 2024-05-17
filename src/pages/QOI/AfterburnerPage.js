import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/AfterburnerPage.css";

const AfterburnerPage = () => {
    return (
        <div className="ab-page">
            <h1 className="ab-title">Antenna Pointing - Afterburner</h1>
            <div className="ab-cards-cont">
                <Link className="link" to="pnpstps/">
                    <div className="ab-card" >
                        <h2 className="ab-card-title">Point and Peak Steps </h2>
                    </div>
                </Link>
                <Link className="link" to="pkext/">
                    <div className="ab-card" >
                        <h2 className="ab-card-title">Peak and Exit Variance Above .3</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </div>
    );
}

export default AfterburnerPage;