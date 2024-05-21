import { Routes, Route } from "react-router-dom";

import ProvisioningPage from "../../pages/ProvisioningFailure/ProvisioningPage";
import ModemOfflineRoutes from "../ModemIssues/ModemOfflineRoutes";
import ModemWhiteRoutes from "./ModemWhiteRoutes";
import ModemBlueRoutes from "./ModemBlueRoutes";

const ProvisioningRoutes = ({ toggleDark }) => {
    return (
        <div className="provisioning-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<ProvisioningPage toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="mdmred/*" 
                    element={<ModemOfflineRoutes toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="mdmwht/*" 
                    element={<ModemWhiteRoutes toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="mdmblu/*" 
                    element={<ModemBlueRoutes toggleDark={toggleDark}/>} 
                />
            </Routes>
        </div>
    );
}

export default ProvisioningRoutes;