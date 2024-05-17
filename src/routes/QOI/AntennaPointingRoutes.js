import { Routes, Route } from "react-router-dom";

import AntennaPointingPage from "../../pages/QOI/AntennaPointingPage";
import CheckBeamOnModem from "../../pages/TSSteps/CheckBeamOnModem";
import CheckForOutages from "../../pages/TSSteps/CheckForOutages";
import CheckPowerSource2 from "../../pages/TSSteps/CheckPowerSource2";
import CheckLOS from "../../pages/TSSteps/CheckLOS";
import PointAndPeak from "../../pages/TSSteps/PointAndPeak";
import CheckForCorrectBeam from "../../pages/TSSteps/CheckForCorrectBeam";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";
import CheckCableRun from "../../pages/TSSteps/CheckCableRun";
import CheckReflector from "../../pages/TSSteps/CheckReflector";

const AntennaPointingRoutes = () => {
    return (
        <div className="ap-routes">
            <Routes>
                <Route path="/*" Component={AntennaPointingPage} />
                <Route path="beam/*" Component={CheckBeamOnModem} />
                <Route path="chkoutg/*" Component={CheckForOutages} />
                <Route path="chkpwr/*" Component={CheckPowerSource2} />
                <Route path="los/*" Component={CheckLOS} />
                <Route path="pnp/*" Component={PointAndPeak} />
                <Route path="chkbeam/*" Component={CheckForCorrectBeam} />
                <Route path="swptria/*" Component={SwapTRIA2} />
                <Route path="swpmdm/*" Component={SwapModem2} />
                <Route path="chkcbl/*" Component={CheckCableRun} />
                <Route path="chkrfl/*" Component={CheckReflector} />

            </Routes>
        </div>
    );
}

export default AntennaPointingRoutes;