import { Routes, Route } from "react-router-dom";

import SlowSpeedsPage from "../../pages/NetworkIssues/SlowSpeedsPage";
import CheckDataUse from "../../pages/TSSteps/CheckDataUse";
import CheckForLowSignal from "../../pages/TSSteps/CheckForLowSignal";
import SpeedTestRoutes from "./SpeedTestRoutes";

const SlowSpeedsRoutes = ({ toggleDark }) => {
    return (
        <div className="slow-speed-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<SlowSpeedsPage toggleDark={toggleDark}/>}
                />
                <Route 
                    path="datause/*" 
                    element={<CheckDataUse toggleDark={toggleDark}/>}
                />
                <Route 
                    path="lowsgnl/*" 
                    element={<CheckForLowSignal toggleDark={toggleDark}/>}
                />
                <Route 
                    path="spdtst/*" 
                    element={<SpeedTestRoutes toggleDark={toggleDark}/>}
                />
            </Routes>
        </div>
    );
}

export default SlowSpeedsRoutes;