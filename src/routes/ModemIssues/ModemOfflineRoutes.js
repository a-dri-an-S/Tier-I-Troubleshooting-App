import { Routes, Route } from "react-router-dom";

import ModemOfflinePage from "../../pages/ModemIssues/ModemOfflinePage";
import SwapPowerSupply from "../../pages/TroubleshootingPages/SwapPowerSupply";
import CheckPowerSource1 from "../../pages/TroubleshootingPages/CheckPowerSource1";
import SwapTRIA1 from "../../pages/TroubleshootingPages/SwapTRIA1";
import SwapModem1 from "../../pages/TroubleshootingPages/SwapModem1";

const ModemOfflineRoutes = () => {
    return (
        <div className="modem-offline-routes">
            <Routes>
                <Route path="/*" Component={ModemOfflinePage} />
                <Route path="pwrsup/*" Component={SwapPowerSupply} />
                <Route path="pwrsrc/*" Component={CheckPowerSource1} />
                <Route path="swptria/*" Component={SwapTRIA1} />
                <Route path="swpmodem/*" Component={SwapModem1} />
            </Routes>
        </div>
    );
}

export default ModemOfflineRoutes;