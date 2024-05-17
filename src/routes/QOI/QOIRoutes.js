import { Routes, Route } from "react-router-dom";

import QOIPage from "../../pages/QOI/QOIPage";
import AntennaPointingRoutes from "./AntennaPointingRoutes";
import AfterburnerRoutes from "./AfterburnerRoutes";
import EquipmentPage from "../../pages/QOI/EquipmentPage";
import SoftwarePage from "../../pages/QOI/SoftwarePage";
import InstalledDevicePage from "../../pages/QOI/InstalledDevicePage";

const QOIRoutes = () => {
    return (
        <div className="qoi-routes">
            <Routes>
                <Route path="/*" Component={QOIPage} />
                <Route path="ap/*" Component={AntennaPointingRoutes} />
                <Route path="ab/*" Component={AfterburnerRoutes} />
                <Route path="equip/*" Component={EquipmentPage} />
                <Route path="sw/*" Component={SoftwarePage} />
                <Route path="invdev/*" Component={InstalledDevicePage} />
            </Routes>
        </div>
    );
}

export default QOIRoutes;