import { Routes, Route } from "react-router-dom";

import ModemWhitePage from "../../pages/ProvisioningFailure/ModemWhitePage";
import PointAndPeak2 from "../../pages/TSSteps/PointAndPeak2";

const ModemWhiteRoutes = () => {
    return (
        <div className="modem-white-routes">
            <Routes>
                <Route path="/*" Component={ModemWhitePage} />
                <Route path="pnp/*" Component={PointAndPeak2} />
            </Routes>
        </div>
    );
}

export default ModemWhiteRoutes;