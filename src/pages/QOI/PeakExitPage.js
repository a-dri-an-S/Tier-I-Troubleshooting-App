// import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/PeakExitPage.css";

const PeakExitPAge = () => {
    return (
        <section className="peak-exit-page">
            <h1 className="peak-exit-title">Peak and Exit Variance Above .3</h1>
            <div className="peak-exit-cards-cont">
                <div className="peak-exit-card" >
                    <h2 className="peak-exit-card-title">Check for SAN Outages</h2>
                </div>
                <div className="peak-exit-card" >
                    <h2 className="peak-exit-card-title">Point and Peak</h2>
                </div>
                <div className="peak-exit-card" >
                    <h2 className="peak-exit-card-title">Swap TRIA</h2>
                </div>
                <div className="peak-exit-card" >
                    <h2 className="peak-exit-card-title">Swap Modem</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default PeakExitPAge;