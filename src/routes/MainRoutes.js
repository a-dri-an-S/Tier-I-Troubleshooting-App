import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ModemIssuesPage from "../pages/ModemIssues/ModemIssuesPage";
import NetworkIssuesPage from "../pages/NetworkIssues/NetworkIssuesPage";
import PointAndPeakPage from "../pages/PointAndPeak/PointAndPeakPage";
import ProvisioningPage from "../pages/ProvisioningFailure/ProvisioningPage";
import QOIPage from "../pages/QOI/QOIPage";

const MainRoutes = () => {
    return (
        <div className="main-routes">
            <Routes>
                <Route path="/*" Component={MainPage}/>
                <Route path="modem/*" Component={ModemIssuesPage}/>
                <Route path="network/*" Component={NetworkIssuesPage}/>
                <Route path="pnp/*" Component={PointAndPeakPage}/>
                <Route path="provisioning/*" Component={ProvisioningPage}/>
                <Route path="qoi/*" Component={QOIPage}/>
            </Routes>
        </div>
    );
}

export default MainRoutes;