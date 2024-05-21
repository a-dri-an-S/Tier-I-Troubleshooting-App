import { Routes, Route } from "react-router-dom";

import ModemLockPage from "../pages/PointAndPeak/ModemLockPage";
import AntennaPointingPage from "../pages/QOI/AntennaPointingPage";
import ModemOfflinePage from "../pages/ModemIssues/ModemOfflinePage";

const PowerSupplyRoutes = () => {
    return (
        <div className="power-supply-routes">
            <Routes>
                <Route path="/pnp/mdmlck/*" element={<ModemLockPage />} />
                <Route path="/qoi/ap/*" Component={<AntennaPointingPage/>} />
                <Route path="/modem/offline/*" Component={<ModemOfflinePage/>} />
            </Routes>
        </div>
    );
}

export default PowerSupplyRoutes;