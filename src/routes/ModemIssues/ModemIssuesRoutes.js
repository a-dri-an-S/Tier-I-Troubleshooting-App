import { Routes, Route } from "react-router-dom";

import ModemIssuesPage from "../../pages/ModemIssues/ModemIssuesPage";
import ModemOfflineRoutes from "./ModemOfflineRoutes";
import NoWifiRoutes from "./NoWifiRoutes";
import EthPortsRoutes from "./EthPortsRoutes";

const ModemIssuesRoutes = () => {
    return (
        <div className="modem-issues-routes">
            <Routes>
                <Route path="/*" Component={ModemIssuesPage} />
                <Route path="offline/*" Component={ModemOfflineRoutes} />
                <Route path="nowifi/*" Component={NoWifiRoutes} />
                <Route path="ethports/*" Component={EthPortsRoutes} />
            </Routes>
        </div>
    );
}

export default ModemIssuesRoutes;