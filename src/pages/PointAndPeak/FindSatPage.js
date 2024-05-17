// import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/PointAndPeak/FindSatPage.css";

const FindSatPage = () => {
    return (
        <section className="find-sat-page">
            <h1 className="find-sat-title">Unable to Find the Satellite or Beam</h1>
            <div className="find-sat-cards-cont">
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check the Modem Key</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check the Power Source</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check Elevation, Azimuth and Skew</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check Line of Sight(LOS)</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check for a Plumb Mast</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Swap TRIA</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Swap Modem</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check Reflector</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check for Correct Beam Assignment</h2>
                </div>
                <div className="find-sat-card" >
                    <h2 className="find-sat-card-title">Check Cable Run</h2>
                </div>
            </div>
            <GoBackButton />
        </section>
    );
}

export default FindSatPage;