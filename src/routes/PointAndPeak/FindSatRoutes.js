import { Routes, Route } from "react-router-dom";

import FindSatPage from "../../pages/PointAndPeak/FindSatPage";
import CheckModemKey from "../../pages/TSSteps/CheckModemKey";
import CheckPowerSource2 from "../../pages/TSSteps/CheckPowerSource2";
import CheckElAzSkew from "../../pages/TSSteps/CheckElAzSkew";
import CheckLOS from "../../pages/TSSteps/CheckLOS";
import CheckForPlumbMast from "../../pages/TSSteps/CheckForPlumbMast";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";
import CheckReflector from "../../pages/TSSteps/CheckReflector";
import CheckForCorrectBeam from "../../pages/TSSteps/CheckForCorrectBeam";
import CheckCableRun from "../../pages/TSSteps/CheckCableRun";

const FindSatRoutes = ({ toggleDark }) => {
    return (
        <div className="find-sat-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<FindSatPage toggleDark={toggleDark} />}
                />
                <Route
                    path="mdmkey/*"
                    element={<CheckModemKey toggleDark={toggleDark} />}
                />
                <Route
                    path="chkpwr/*"
                    element={<CheckPowerSource2 toggleDark={toggleDark} />}
                />
                <Route
                    path="elazskw/*"
                    element={<CheckElAzSkew toggleDark={toggleDark} />}
                />
                <Route
                    path="los/*"
                    element={<CheckLOS toggleDark={toggleDark} />}
                />
                <Route
                    path="plmmst/*"
                    element={<CheckForPlumbMast toggleDark={toggleDark} />}
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
                    path="chkrfl/*"
                    element={<CheckReflector toggleDark={toggleDark} />}
                />
                <Route
                    path="beam/*"
                    element={<CheckForCorrectBeam toggleDark={toggleDark} />}
                />
                <Route
                    path="chkcbl/*"
                    element={<CheckCableRun toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default FindSatRoutes;