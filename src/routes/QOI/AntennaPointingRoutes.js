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

const AntennaPointingRoutes = ({ toggleDark }) => {
    return (
        <div className="ap-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<AntennaPointingPage toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="beam/*" 
                    element={<CheckBeamOnModem toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkoutg/*" 
                    element={<CheckForOutages toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkpwr/*" 
                    element={<CheckPowerSource2 toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="los/*" 
                    element={<CheckLOS toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="pnp/*" 
                    element={<PointAndPeak toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkbeam/*" 
                    element={<CheckForCorrectBeam toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="swptria/*" 
                    element={<SwapTRIA2 toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="swpmdm/*" 
                    element={<SwapModem2 toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkcbl/*" 
                    element={<CheckCableRun toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkrfl/*" 
                    element={<CheckReflector toggleDark={toggleDark}/>} 
                />

            </Routes>
        </div>
    );
}

export default AntennaPointingRoutes;