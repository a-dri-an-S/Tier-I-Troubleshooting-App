import { Routes, Route } from "react-router-dom";

import ModemWhitePage from "../../pages/ProvisioningFailure/ModemWhitePage";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";

const ModemWhiteRoutes = () => {
    return (
        <div className="modem-white-routes">
            <Routes>
                <Route path="/*" Component={ModemWhitePage} />
                <Route path="pnp/*" Component={PointAndPeak} />
            </Routes>
        </div>
    );
}

export default ModemWhiteRoutes;