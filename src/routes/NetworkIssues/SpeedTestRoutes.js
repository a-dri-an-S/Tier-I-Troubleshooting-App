import { Routes, Route } from "react-router-dom";

import SpeedTestPage from "../../pages/NetworkIssues/SpeedTestPage";
import SpeedTestFails from "../../pages/TSSteps/SpeedTestFails";
import SpeedTestSlow from "../../pages/TSSteps/SpeedTestSlow";
import SpeedTestAdvertised from "../../pages/TSSteps/SpeedTestAdvertised";

const SpeedTestRoutes = ({ toggleDark }) => {

    return (
        <div className="speed-test-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<SpeedTestPage toggleDark={toggleDark} />}
                />
                <Route
                    path="spdfl/*"
                    element={<SpeedTestFails toggleDark={toggleDark} />}
                />
                <Route
                    path="spdslw/*"
                    element={<SpeedTestSlow toggleDark={toggleDark} />}
                />
                <Route
                    path="spdadv/*"
                    element={<SpeedTestAdvertised toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default SpeedTestRoutes;