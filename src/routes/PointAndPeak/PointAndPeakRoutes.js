import { Routes, Route } from "react-router-dom";

import PointAndPeakPage from "../../pages/PointAndPeak/PointAndPeakPage";
import NoTonesRoutes from "./NoTonesRoutes";
import FindSatRoutes from "./FindSatRoutes";
import ModemLockRoutes from "./ModemLockRoutes";

const PointAndPeakRoutes = ({ toggleDark }) => {
    return (
        <div className="pnp-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<PointAndPeakPage toggleDark={toggleDark} />}
                />
                <Route
                    path="notone/*"
                    element={<NoTonesRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="fndsat/*"
                    element={<FindSatRoutes toggleDark={toggleDark} />}
                />
                <Route
                    path="mdmlck/*"
                    element={<ModemLockRoutes toggleDark={toggleDark} />}
                />
            </Routes>
        </div>
    );
}

export default PointAndPeakRoutes;