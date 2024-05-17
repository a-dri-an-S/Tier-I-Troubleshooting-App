import { Routes, Route } from "react-router-dom";

import ProvisioningPage from "../../pages/ProvisioningFailure/ProvisioningPage";
import ModemOfflineRoutes from "../ModemIssues/ModemOfflineRoutes";
import ModemWhitePage from "../../pages/ProvisioningFailure/ModemWhitePage";
import ModemBluePage from "../../pages/ProvisioningFailure/ModemBluePage";

const ProvisioningRoutes = () => {
    return (
        <div className="provisioning-page">
            <Routes>
                <Route path="/*" Component={ProvisioningPage} />
                <Route path="mdmred/*" Component={ModemOfflineRoutes} />
                <Route path="mdmwht/*" Component={ModemWhitePage} />
                <Route path="mdmblu/*" Component={ModemBluePage} />
            </Routes>
        </div>
    );
}

export default ProvisioningRoutes;