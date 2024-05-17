import { Routes, Route } from "react-router-dom";

import PointAndPeakPage from "../../pages/PointAndPeak/PointAndPeakPage";
import NoTonesRoutes from "./NoTonesRoutes";
import FindSatRoutes from "./FindSatRoutes";
import ModemLockRoutes from "./ModemLockRoutes";

const PointAndPeakRoutes = () => {
    return (
        <div className="pnp-routes">
            <Routes>
                <Route path="/*" Component={PointAndPeakPage}/>
                <Route path="notone/*" Component={NoTonesRoutes}/>
                <Route path="fndsat/*" Component={FindSatRoutes}/>
                <Route path="mdmlck/*" Component={ModemLockRoutes}/>
            </Routes>
        </div>
    );
}

export default PointAndPeakRoutes;