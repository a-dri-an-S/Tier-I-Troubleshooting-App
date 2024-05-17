import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/InvalidDevicePage.css";

const InstalledDevicePage = () => {
    return (
        <div className="invalid-device-page">
            <h1 className="invalid-device-title">Installed Devices</h1>
            <div className="invalid-device-cards-cont">
                <div className="invalid-device-card" >
                    <h2 className="invalid-device-card-title">Invalid Device</h2>
                </div>
            </div>
            <GoBackButton />
        </div>
    );
}

export default InstalledDevicePage;
















