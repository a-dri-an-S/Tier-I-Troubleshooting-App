import { Routes, Route } from "react-router-dom";

import PeakExitPAge from "../../pages/QOI/PeakExitPage";
import CheckSANOutages from "../../pages/TSSteps/CheckSANOutages";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";

const PeakExitRoutes = () => {
    return (
        <div className="peak-exit-routes">
            <Routes>
                <Route path="/*" Component={PeakExitPAge} />
                <Route path="sanoutg/*" Component={CheckSANOutages} />
                <Route path="pnp/*" Component={PointAndPeak} />
                <Route path="swptria/*" Component={SwapTRIA2} />
                <Route path="swpmdm/*" Component={SwapModem2} />
            </Routes>
        </div>
    );
}

export default PeakExitRoutes;