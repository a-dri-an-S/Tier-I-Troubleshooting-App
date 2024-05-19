import { Link } from "react-router-dom";

import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/InvalidDevicePage.css";

const InstalledDevicePage = ({ toggleDark }) => {

    const toggleTitle = `invalid-device-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `invalid-device-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="invalid-device-page">
            <h1 className={toggleTitle}>Installed Devices</h1>
            <div className="invalid-device-cards-cont">
                <Link className="link" to="invdev/">
                    <div className={toggleCard} >
                        <h2 className="invalid-device-card-title">Invalid Device</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default InstalledDevicePage;
















