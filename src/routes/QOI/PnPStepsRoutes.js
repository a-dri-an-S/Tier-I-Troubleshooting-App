import { Routes, Route } from "react-router-dom";

import PnPStepsPage from "../../pages/QOI/PnPStepsPage";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";

const PnPStepsRoutes = ({ toggleDark }) => {
    return (
        <div className="pnp-steps-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<PnPStepsPage toggleDark={toggleDark} />}
                />
                <Route
                    path="pnp/*"
                    element={<PointAndPeak toggleDark={toggleDark} />}
                />
                <Route
                    path="swptria/*"
                    element={<SwapTRIA2 toggleDark={toggleDark} />}
                />
                <Route
                    path="swpmdm/*"
                    element={<SwapModem2 toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default PnPStepsRoutes;