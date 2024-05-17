import { Routes, Route } from "react-router-dom";

import SoftwarePage from "../../pages/QOI/SoftwarePage";
import PowerCycleModem from "../../pages/TSSteps/PowerCycleModem";

const SoftwareRoutes = () => {
    return (
        <div className="software-routes">
            <Routes>
                <Route path="/*" Component={SoftwarePage} />
                <Route path="pwrcycl/*" Component={PowerCycleModem} />
            </Routes>
        </div>
    );
}

export default SoftwareRoutes;