import { Routes, Route } from "react-router-dom";

import PnPStepsPage from "../../pages/QOI/PnPStepsPage";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";

const PnPStepsRoutes = () => {
    return (
        <div className="pnp-steps-routes">
            <Routes>
                <Route path="/*" Component={PnPStepsPage} />
                <Route path="pnp/*" Component={PointAndPeak} />
                <Route path="swptria/*" Component={SwapTRIA2} />
                <Route path="swpmdm/*" Component={SwapModem2} />
                
            </Routes>
        </div>
    );
}

export default PnPStepsRoutes;