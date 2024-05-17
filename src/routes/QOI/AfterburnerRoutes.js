import { Routes, Route } from "react-router-dom";

import AfterburnerPage from "../../pages/QOI/AfterburnerPage";
import PnPStepsPage from "../../pages/QOI/PnPStepsPage";
import PeakExitPAge from "../../pages/QOI/PeakExitPage";

const AfterburnerRoutes = () => {
    return (
        <div className="ab-routes">
            <Routes>
                <Route path="/*" Component={AfterburnerPage} />
                <Route path="pnpstps/*" Component={PnPStepsPage} />
                <Route path="pkext/*" Component={PeakExitPAge} />
            </Routes>
        </div>
    );
}

export default AfterburnerRoutes;