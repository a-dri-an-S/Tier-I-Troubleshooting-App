import { Link } from "react-router-dom";
import "../../styles/PointAndPeak/PointAndPeakPage.css"

const PointAndPeakPage = () => {
    return (
        <section className="pnp-page">
            <h1 className="pnp-title">Point and Peak</h1>
            <div className="pnp-cards-cont">
                <Link className="link" to="notone/">
                    <div className="pnp-card" >
                        <h2 className="pnp-card-title">No TRIA Tones</h2>
                    </div>
                </Link>
                <Link className="link" to="fndsat/">
                    <div className="pnp-card" >
                        <h2 className="pnp-card-title">Unable to find the satellite or beam</h2>
                    </div>
                </Link>
                <Link className="link" to="mdmlck/">
                    <div className="pnp-card" >
                        <h2 className="pnp-card-title">Unable to achieve modem lock <br />(Can't get past network entry)</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default PointAndPeakPage;