import { Routes, Route } from "react-router-dom";

import QOIPage from "../../pages/QOI/QOIPage";
import AntennaPointingRoutes from "./AntennaPointingRoutes";
import AfterburnerRoutes from "./AfterburnerRoutes";
import EquipmentRoutes from "./EquipmentRoutes";
import SoftwareRoutes from "./SoftwareRoutes";
import InstalledDeviceRoutes from "./InstalledDeviceRoutes";

const QOIRoutes = ({ toggleDark }) => {
    return (
        <div className="qoi-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<QOIPage toggleDark={toggleDark} />}
                />
                <Route
                    path="ap/*"
                    element={<AntennaPointingRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="ab/*"
                    element={<AfterburnerRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="equip/*"
                    element={<EquipmentRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="sw/*"
                    element={<SoftwareRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="instdev/*"
                    element={<InstalledDeviceRoutes toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default QOIRoutes;