import { Routes, Route } from "react-router-dom";

import ModemOfflinePage from "../../pages/ModemIssues/ModemOfflinePage";
import SwapPowerSupply from "../../pages/TSSteps/SwapPowerSupply";
import CheckPowerSource1 from "../../pages/TSSteps/CheckPowerSource1";
import SwapTRIA1 from "../../pages/TSSteps/SwapTRIA1";
import SwapModem1 from "../../pages/TSSteps/SwapModem1";

const ModemOfflineRoutes = ({ toggleDark }) => {
    return (
        <div className="modem-offline-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<ModemOfflinePage toggleDark={toggleDark} />}
                />
                <Route
                    path="pwrsup/*"
                    element={<SwapPowerSupply toggleDark={toggleDark} />}
                />
                <Route
                    path="pwrsrc/*"
                    element={<CheckPowerSource1 toggleDark={toggleDark} />}
                />
                <Route
                    path="swptria/*"
                    element={<SwapTRIA1 toggleDark={toggleDark} />}
                />
                <Route
                    path="swpmodem/*"
                    element={<SwapModem1 toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default ModemOfflineRoutes;