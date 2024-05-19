import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ModemIssuesRoutes from "./ModemIssues/ModemIssuesRoutes";
import NetworkIssuesRoutes from "./NetworkIssues/NetworkIssuesRoutes";
import PointAndPeakRoutes from "./PointAndPeak/PointAndPeakRoutes";
import ProvisioningRoutes from "./Provisioning/ProvisioningRoutes";
import QOIRoutes from "./QOI/QOIRoutes";

const MainRoutes = ({ toggleDark }) => {
    return (
        <div className="main-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<MainPage toggleDark={toggleDark} />}
                />
                <Route
                    path="modem/*"
                    element={<ModemIssuesRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="network/*"
                    element={<NetworkIssuesRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="pnp/*"
                    element={<PointAndPeakRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="provisioning/*"
                    element={<ProvisioningRoutes toggleDark={toggleDark}/>}
                />
                <Route
                    path="qoi/*"
                    element={<QOIRoutes toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default MainRoutes;