import { Routes, Route } from "react-router-dom";

import InstalledDevicePage from "../../pages/QOI/InstalledDevicePage";
import InvalidDevice from "../../pages/TSSteps/InvalidDevice";

const InstalledDeviceRoutes = () => {
    return (
        <div className="installed-device">
            <Routes>
                <Route path="/*" Component={InstalledDevicePage} />
                <Route path="invdev/*" Component={InvalidDevice} />
            </Routes>
        </div>
    );
}

export default InstalledDeviceRoutes;