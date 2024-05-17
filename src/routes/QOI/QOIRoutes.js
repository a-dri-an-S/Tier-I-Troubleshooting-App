import { Routes, Route } from "react-router-dom";

import QOIPage from "../../pages/QOI/QOIPage";
import AntennaPointingRoutes from "./AntennaPointingRoutes";
import AfterburnerRoutes from "./AfterburnerRoutes";
import EquipmentRoutes from "./EquipmentRoutes";
import SoftwareRoutes from "./SoftwareRoutes";
import InstalledDeviceRoutes from "./InstalledDeviceRoutes";

const QOIRoutes = () => {
    return (
        <div className="qoi-routes">
            <Routes>
                <Route path="/*" Component={QOIPage} />
                <Route path="ap/*" Component={AntennaPointingRoutes} />
                <Route path="ab/*" Component={AfterburnerRoutes} />
                <Route path="equip/*" Component={EquipmentRoutes} />
                <Route path="sw/*" Component={SoftwareRoutes} />
                <Route path="instdev/*" Component={InstalledDeviceRoutes} />
            </Routes>
        </div>
    );
}

export default QOIRoutes;