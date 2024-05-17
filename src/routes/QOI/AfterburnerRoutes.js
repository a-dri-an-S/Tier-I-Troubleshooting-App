import { Routes, Route } from "react-router-dom";

import AfterburnerPage from "../../pages/QOI/AfterburnerPage";
import PnPStepsRoutes from "./PnPStepsRoutes";
import PeakExitRoutes from "./PeakExitRoutes";

const AfterburnerRoutes = () => {
    return (
        <div className="ab-routes">
            <Routes>
                <Route path="/*" Component={AfterburnerPage} />
                <Route path="pnpstps/*" Component={PnPStepsRoutes} />
                <Route path="pkext/*" Component={PeakExitRoutes} />
            </Routes>
        </div>
    );
}

export default AfterburnerRoutes;