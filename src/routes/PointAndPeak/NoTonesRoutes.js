import { Routes, Route } from "react-router-dom";

import NoTonesPage from "../../pages/PointAndPeak/NoTonesPage";
import CheckPowerSource2 from "../../pages/TSSteps/CheckPowerSource2";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";
import CheckCableRun from "../../pages/TSSteps/CheckCableRun";

const NoTonesRoutes = ({ toggleDark }) => {
    return (
        <div className="no-tones-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<NoTonesPage toggleDark={toggleDark} />}
                />
                <Route
                    path="chkpwr/*"
                    element={<CheckPowerSource2 toggleDark={toggleDark} />}
                />
                <Route
                    path="swptria/*"
                    element={<SwapTRIA2 toggleDark={toggleDark} />}
                />
                <Route
                    path="swpmdm/*"
                    element={<SwapModem2 toggleDark={toggleDark} />}
                />
                <Route
                    path="chkcbl/*"
                    element={<CheckCableRun toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default NoTonesRoutes;