import { Link } from "react-router-dom";

import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/InvalidDevicePage.css";

const InstalledDevicePage = () => {
    return (
        <section className="invalid-device-page">
            <h1 className="invalid-device-title">Installed Devices</h1>
            <div className="invalid-device-cards-cont">
                <Link className="link" to="invdev/">
                    <div className="invalid-device-card" >
                        <h2 className="invalid-device-card-title">Invalid Device</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default InstalledDevicePage;
















