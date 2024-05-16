import { Routes, Route } from "react-router-dom";

import SpeedTestPage from "../../pages/NetworkIssues/SpeedTestPage";
import SpeedTestFails from "../../pages/TSSteps/SpeedTestFails";
import SpeedTestSlow from "../../pages/TSSteps/SpeedTestSlow";
import SpeedTestAdvertised from "../../pages/TSSteps/SpeedTestAdvertised";

const SpeedTestRoutes = () => {
    return (
        <div className="speed-test-routes">
            <Routes>
                <Route path="/*" Component={SpeedTestPage}/>
                <Route path="spdfl/*" Component={SpeedTestFails}/>
                <Route path="spdslw/*" Component={SpeedTestSlow}/>
                <Route path="spdadv/*" Component={SpeedTestAdvertised}/>
            </Routes>
        </div>
    );
}

export default SpeedTestRoutes;