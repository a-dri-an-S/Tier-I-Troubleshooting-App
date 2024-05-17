import { Routes, Route } from "react-router-dom";

import ModemBluePage from "../../pages/ProvisioningFailure/ModemBluePage";
import CheckForOutages2 from "../../pages/TSSteps/CheckForOutages2";
import CheckCRMErrors from "../../pages/TSSteps/CheckCRMErrors";
import VTTActivationConnection from "../../pages/TSSteps/VTTActivationConnection";
import VTTActivationOther from "../../pages/TSSteps/VTTActivationOther";

const ModemBlueRoutes = () => {
    return (
        <div className="modem-blue-routes">
            <Routes>
                <Route path="/*" Component={ModemBluePage} />
                <Route path="chkoutg/*" Component={CheckForOutages2} />
                <Route path="errs/*" Component={CheckCRMErrors} />
                <Route path="vttcon/*" Component={VTTActivationConnection} />
                <Route path="vttoth/*" Component={VTTActivationOther} />
            </Routes>
        </div>
    );
}

export default ModemBlueRoutes;