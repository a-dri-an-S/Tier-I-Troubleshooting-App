import { Routes, Route } from "react-router-dom";

import SlowSpeedsPage from "../../pages/NetworkIssues/SlowSpeedsPage";
import CheckDataUse from "../../pages/TSSteps/CheckDataUse";
import CheckForLowSignal from "../../pages/TSSteps/CheckForLowSignal";
import SpeedTestRoutes from "./SpeedTestRoutes";

const SlowSpeedsRoutes = () => {
    return (
        <div className="slow-speed-routes">
            <Routes>
                <Route path="/*" Component={SlowSpeedsPage}/>
                <Route path="datause/*" Component={CheckDataUse}/>
                <Route path="lowsgnl/*" Component={CheckForLowSignal}/>
                <Route path="spdtst/*" Component={SpeedTestRoutes}/>
            </Routes>
        </div>
    );
}

export default SlowSpeedsRoutes;