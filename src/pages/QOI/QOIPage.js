import { Link } from "react-router-dom";
import "../../styles/QOI/QOIPage.css";

const QOIPage = () => {
    return (
        <section className="qoi-page">
            <h1 className="qoi-title">Quality of Install(QOI)</h1>
            <div className="qoi-cards-cont">
                <Link className="link" to="ap/">
                    <div className="qoi-card" >
                        <h2 className="qoi-card-title">Antenna Pointing</h2>
                    </div>
                </Link>
                <Link className="link" to="ab/">
                    <div className="qoi-card" >
                        <h2 className="qoi-card-title">Antenna Pointing - Afterburner</h2>
                    </div>
                </Link>
                <Link className="link" to="equip/">
                    <div className="qoi-card" >
                        <h2 className="qoi-card-title">Equipment (Cable and ODU)</h2>
                    </div>
                </Link>
                <Link className="link" to="sw/">
                    <div className="qoi-card" >
                        <h2 className="qoi-card-title">Software</h2>
                    </div>
                </Link>
                <Link className="link" to="instdev/">
                    <div className="qoi-card" >
                        <h2 className="qoi-card-title">Installed Devices</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default QOIPage;