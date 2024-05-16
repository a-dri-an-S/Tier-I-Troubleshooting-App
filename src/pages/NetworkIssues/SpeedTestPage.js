import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/SpeedTestPage.css";

const SpeedTestPage = () => {
    return (
        <section className="speed-test-page">
            <h1 className="speed-test-title">Run A Speed Test</h1>
            <p className="speed-test-desc">Run a speed test in ESVT to confirm speed issues</p>
            <div className="speed-test-cards-cont">
                <Link className="link" to="spdfl/">
                    <div
                        className="speed-test-card" >
                        <h2 className="speed-test-card-title">Speed Test Fails to Run Assessment</h2>
                    </div>
                </Link>
                <Link className="link" to="spdslw/">
                    <div
                        className="speed-test-card" >
                        <h2 className="speed-test-card-title">Speed Test Confirms Slow Speeds</h2>
                    </div>
                </Link>
                <Link className="link" to="spdadv/">
                    <div
                        className="speed-test-card" >
                        <h2 className="speed-test-card-title">Speed Test Return's Advertised Speeds</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default SpeedTestPage;