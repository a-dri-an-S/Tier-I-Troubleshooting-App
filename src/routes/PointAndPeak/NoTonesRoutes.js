import { Routes, Route } from "react-router-dom";

import NoTonesPage from "../../pages/PointAndPeak/NoTonesPage";
import CheckPowerSource2 from "../../pages/TSSteps/CheckPowerSource2";
import SwapTRIA2 from "../../pages/TSSteps/SwapTRIA2";
import SwapModem2 from "../../pages/TSSteps/SwapModem2";
import CheckCableRun from "../../pages/TSSteps/CheckCableRun";

const NoTonesRoutes = () => {
    return (
        <div className="no-tones-routes">
            <Routes>
            <Route path="/*" Component={NoTonesPage}/>
            <Route path="chkpwr/*" Component={CheckPowerSource2}/>
            <Route path="swptria/*" Component={SwapTRIA2}/>
            <Route path="swpmdm/*" Component={SwapModem2}/>
            <Route path="chkcbl/*" Component={CheckCableRun}/>

            </Routes>
        </div>
    );
}

export default NoTonesRoutes;