import { Routes, Route } from "react-router-dom";

import ModemBluePage from "../../pages/ProvisioningFailure/ModemBluePage";
import CheckForOutages2 from "../../pages/TSSteps/CheckForOutages2";
import CheckCRMErrors from "../../pages/TSSteps/CheckCRMErrors";
import VTTActivationConnection from "../../pages/TSSteps/VTTActivationConnection";
import VTTActivationOther from "../../pages/TSSteps/VTTActivationOther";

const ModemBlueRoutes = ({ toggleDark }) => {
    return (
        <div className="modem-blue-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<ModemBluePage toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkoutg/*" 
                    element={<CheckForOutages2 toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="errs/*" 
                    element={<CheckCRMErrors toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="vttcon/*" 
                    element={<VTTActivationConnection toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="vttoth/*" 
                    element={<VTTActivationOther toggleDark={toggleDark}/>} 
                />
            </Routes>
        </div>
    );
}

export default ModemBlueRoutes;