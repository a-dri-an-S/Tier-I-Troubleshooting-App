import { Routes, Route } from "react-router-dom";

import ProvisioningPage from "../../pages/ProvisioningFailure/ProvisioningPage";
import ModemOfflineRoutes from "../ModemIssues/ModemOfflineRoutes";
import ModemWhiteRoutes from "./ModemWhiteRoutes";
import ModemBluePage from "../../pages/ProvisioningFailure/ModemBluePage";

const ProvisioningRoutes = () => {
    return (
        <div className="provisioning-page">
            <Routes>
                <Route path="/*" Component={ProvisioningPage} />
                <Route path="mdmred/*" Component={ModemOfflineRoutes} />
                <Route path="mdmwht/*" Component={ModemWhiteRoutes} />
                <Route path="mdmblu/*" Component={ModemBluePage} />
            </Routes>
        </div>
    );
}

export default ProvisioningRoutes;