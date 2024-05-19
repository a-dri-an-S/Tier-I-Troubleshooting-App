import { Routes, Route } from "react-router-dom";

import InstalledDevicePage from "../../pages/QOI/InstalledDevicePage";
import InvalidDevice from "../../pages/TSSteps/InvalidDevice";

const InstalledDeviceRoutes = ({ toggleDark }) => {
    return (
        <div className="installed-device">
            <Routes>
                <Route 
                    path="/*" 
                    element={<InstalledDevicePage toggleDark={toggleDark}/>} />
                <Route 
                    path="invdev/*" 
                    element={<InvalidDevice toggleDark={toggleDark}/>} />
            </Routes>
        </div>
    );
}

export default InstalledDeviceRoutes;