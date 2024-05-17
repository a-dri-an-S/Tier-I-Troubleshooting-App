import { Routes, Route } from "react-router-dom";

import ProvisioningPage from "../../pages/ProvisioningFailure/ProvisioningPage";
import ModemOfflineRoutes from "../ModemIssues/ModemOfflineRoutes";
import ModemWhiteRoutes from "./ModemWhiteRoutes";
import ModemBlueRoutes from "./ModemBlueRoutes";

const ProvisioningRoutes = () => {
    return (
        <div className="provisioning-page">
            <Routes>
                <Route path="/*" Component={ProvisioningPage} />
                <Route path="mdmred/*" Component={ModemOfflineRoutes} />
                <Route path="mdmwht/*" Component={ModemWhiteRoutes} />
                <Route path="mdmblu/*" Component={ModemBlueRoutes} />
            </Routes>
        </div>
    );
}

export default ProvisioningRoutes;