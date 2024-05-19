import { Routes, Route } from "react-router-dom";

import ModemIssuesPage from "../../pages/ModemIssues/ModemIssuesPage";
import ModemOfflineRoutes from "./ModemOfflineRoutes";
import NoWifiRoutes from "./NoWifiRoutes";
import EthPortsRoutes from "./EthPortsRoutes";

const ModemIssuesRoutes = ({ toggleDark }) => {
    return (
        <div className="modem-issues-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<ModemIssuesPage toggleDark={toggleDark} />}
                />
                <Route
                    path="offline/*"
                    element={<ModemOfflineRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="nowifi/*"
                    element={<NoWifiRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="ethports/*"
                    element={<EthPortsRoutes toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default ModemIssuesRoutes;