import { Routes, Route } from "react-router-dom";

import SoftwarePage from "../../pages/QOI/SoftwarePage";
import PowerCycleModem from "../../pages/TSSteps/PowerCycleModem";

const SoftwareRoutes = ({ toggleDark }) => {
    return (
        <div className="software-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<SoftwarePage toggleDark={toggleDark} />}
                />
                <Route
                    path="pwrcycl/*"
                    element={<PowerCycleModem toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default SoftwareRoutes;