import { Routes, Route } from "react-router-dom";

import PeakExitPage from "../../pages/QOI/PeakExitPage";
import CheckSANOutages from "../../pages/TSSteps/CheckSANOutages";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";

const PeakExitRoutes = ({ toggleDark }) => {
    return (
        <div className="peak-exit-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<PeakExitPage toggleDark={toggleDark} />}
                />
                <Route
                    path="sanoutg/*"
                    element={<CheckSANOutages toggleDark={toggleDark} />}
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

export default PeakExitRoutes;