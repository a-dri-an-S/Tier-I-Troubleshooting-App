import { Routes, Route } from "react-router-dom";

import ModemLockPage from "../../pages/PointAndPeak/ModemLockPage";
import CheckForOutages from "../../pages/TSSteps/CheckForOutages"
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

const ModemLockRoutes = () => {
    return (
        <div className="find-sat-routes">
            <Routes>
                <Route path="/*" Component={ModemLockPage} />
                <Route path="chkoutg/*" Component={CheckForOutages} />
                <Route path="mdmkey/*" Component={CheckModemKey} />
                <Route path="chkpwr/*" Component={CheckPowerSource2} />
                <Route path="elazskw/*" Component={CheckElAzSkew} />
                <Route path="los/*" Component={CheckLOS} />
                <Route path="plmmst/*" Component={CheckForPlumbMast} />
                <Route path="swptria/*" Component={SwapTRIA2} />
                <Route path="swpmdm/*" Component={SwapModem2} />
                <Route path="chkrfl/*" Component={CheckReflector} />
                <Route path="beam/*" Component={CheckForCorrectBeam} />
                <Route path="chkcbl/*" Component={CheckCableRun} />
            </Routes>
        </div>
    );
}

export default ModemLockRoutes;