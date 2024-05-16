import { Routes, Route } from "react-router-dom";

import NoWifiPage from "../../pages/ModemIssues/NoWifiPage";
import DisableBridgeMG from "../../pages/TSSteps/DisableBridgeMG";
import ViasatShieldPremium from "../../pages/TSSteps/ViasatSheildPremium"
import CheckWifiSSID from "../../pages/TSSteps/CheckWifiSSID";
import DisableBridgeESVT from "../../pages/TSSteps/DisableBridgeESVT";

const NoWifiRoutes = () => {
    return (
        <div className="no-wifi-routes">
            <Routes>
                <Route path="/*" Component={NoWifiPage} />
                <Route path="dsbbrgmg/*" Component={DisableBridgeMG} />
                <Route path="shdprm/*" Component={ViasatShieldPremium} />
                <Route path="ssid/*" Component={CheckWifiSSID} />
                <Route path="dsbbrgesvt/*" Component={DisableBridgeESVT} />
            </Routes>
        </div>
    );
}

export default NoWifiRoutes;