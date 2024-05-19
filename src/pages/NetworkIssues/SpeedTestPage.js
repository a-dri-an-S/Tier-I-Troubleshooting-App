import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/NetworkIssues/SpeedTestPage.css";

const SpeedTestPage = ({ toggleDark }) => {

    const toggleTitle = `speed-test-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleDesc = `speed-test-desc ${toggleDark ? 'dark-desc' : 'light-desc'}`
    const toggleCard = `speed-test-card ${toggleDark ? 'dark-card' : 'light-card'}`;


    return (
        <section className="speed-test-page">
            <h1 className={toggleTitle}>Run A Speed Test</h1>
            <p className={toggleDesc}>Run a speed test in ESVT to confirm speed issues</p>
            <div className="speed-test-cards-cont">
                <Link className="link" to="spdfl/">
                    <div
                        className={toggleCard} >
                        <h2 className="speed-test-card-title">Speed Test Fails to Run Assessment</h2>
                    </div>
                </Link>
                <Link className="link" to="spdslw/">
                    <div
                        className={toggleCard} >
                        <h2 className="speed-test-card-title">Speed Test Confirms Slow Speeds</h2>
                    </div>
                </Link>
                <Link className="link" to="spdadv/">
                    <div
                        className={toggleCard} >
                        <h2 className="speed-test-card-title">Speed Test Return's Advertised Speeds</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark} />
        </section>
    );
}

export default SpeedTestPage;