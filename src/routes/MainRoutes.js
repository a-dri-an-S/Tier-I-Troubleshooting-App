import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ModemIssuesRoutes from "./ModemIssues/ModemIssuesRoutes";
import NetworkIssuesRoutes from "./NetworkIssues/NetworkIssuesRoutes";
import PointAndPeakRoutes from "./PointAndPeak/PointAndPeakRoutes";
import ProvisioningPage from "../pages/ProvisioningFailure/ProvisioningPage";
import QOIPage from "../pages/QOI/QOIPage";

const MainRoutes = () => {
    return (
        <div className="main-routes">
            <Routes>
                <Route path="/*" Component={MainPage} />
                <Route path="modem/*" Component={ModemIssuesRoutes} />
                <Route path="network/*" Component={NetworkIssuesRoutes} />
                <Route path="pnp/*" Component={PointAndPeakRoutes} />
                <Route path="provisioning/*" Component={ProvisioningPage} />
                <Route path="qoi/*" Component={QOIPage} />
            </Routes>
        </div>
    );
}

export default MainRoutes;