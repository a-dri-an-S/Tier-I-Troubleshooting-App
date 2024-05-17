import { Routes, Route } from "react-router-dom";

import QOIPage from "../../pages/QOI/QOIPage";
import AntennaPointingPage from "../../pages/QOI/AntennaPointingPage";
import AfterburnerPage from "../../pages/QOI/AfterburnerPage";
import EquipmentPage from "../../pages/QOI/EquipmentPage";
import SoftwarePage from "../../pages/QOI/SoftwarePage";
import InstalledDevicePage from "../../pages/QOI/InstalledDevicePage";

const QOIRoutes = () => {
    return (
        <div className="qoi-routes">
            <Routes>
                <Route path="/*" Component={QOIPage} />
                <Route path="ap/*" Component={AntennaPointingPage} />
                <Route path="ab/*" Component={AfterburnerPage} />
                <Route path="equip/*" Component={EquipmentPage} />
                <Route path="sw/*" Component={SoftwarePage} />
                <Route path="invdev/*" Component={InstalledDevicePage} />
            </Routes>
        </div>
    );
}

export default QOIRoutes;