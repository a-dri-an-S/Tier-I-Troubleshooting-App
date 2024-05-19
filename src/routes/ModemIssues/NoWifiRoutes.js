import { Routes, Route } from "react-router-dom";

import NoWifiPage from "../../pages/ModemIssues/NoWifiPage";
import DisableBridgeMG from "../../pages/TSSteps/DisableBridgeMG";
import ViasatShieldPremium from "../../pages/TSSteps/ViasatSheildPremium"
import CheckWifiSSID from "../../pages/TSSteps/CheckWifiSSID";
import DisableBridgeESVT from "../../pages/TSSteps/DisableBridgeESVT";

const NoWifiRoutes = ({ toggleDark }) => {
    return (
        <div className="no-wifi-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<NoWifiPage toggleDark={toggleDark} />}
                />
                <Route
                    path="dsbbrgmg/*"
                    element={<DisableBridgeMG toggleDark={toggleDark} />}
                />
                <Route
                    path="shdprm/*"
                    element={<ViasatShieldPremium toggleDark={toggleDark} />}
                />
                <Route
                    path="ssid/*"
                    element={<CheckWifiSSID toggleDark={toggleDark} />}
                />
                <Route
                    path="dsbbrgesvt/*"
                    element={<DisableBridgeESVT toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default NoWifiRoutes;