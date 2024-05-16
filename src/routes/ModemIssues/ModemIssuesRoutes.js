import { Routes, Route } from "react-router-dom";

import ModemIssuesPage from "../../pages/ModemIssues/ModemIssuesPage";
import ModemOfflinePage from "../../pages/ModemIssues/ModemOfflinePage";
import NoWifiPage from "../../pages/ModemIssues/NoWifiPage";
import EthPortsPage from "../../pages/ModemIssues/EthPortsPage";

const ModemIssuesRoutes = () => {
    return (
        <div className="modem-issues-routes">
            <Routes>
                <Route path="/*" Component={ModemIssuesPage} />
                <Route path="offline/*" Component={ModemOfflinePage} />
                <Route path="nowifi/*" Component={NoWifiPage} />
                <Route path="ethports/*" Component={EthPortsPage} />
            </Routes>
        </div>
    );
}

export default ModemIssuesRoutes;