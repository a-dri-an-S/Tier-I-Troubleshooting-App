import { Routes, Route } from "react-router-dom";

import AfterburnerPage from "../../pages/QOI/AfterburnerPage";
import PnPStepsRoutes from "./PnPStepsRoutes";
import PeakExitRoutes from "./PeakExitRoutes";

const AfterburnerRoutes = ({ toggleDark }) => {
    return (
        <div className="ab-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<AfterburnerPage toggleDark={toggleDark} />}
                />
                <Route
                    path="pnpstps/*"
                    element={<PnPStepsRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="pkext/*"
                    element={<PeakExitRoutes toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default AfterburnerRoutes;