import { Routes, Route } from "react-router-dom";

import PointAndPeakPage from "../../pages/PointAndPeak/PointAndPeakPage";
import NoTonesPage from "../../pages/PointAndPeak/NoTonesPage";
import FindSatPage from "../../pages/PointAndPeak/FindSatPage";
import ModemLockPage from "../../pages/PointAndPeak/ModemLockPage";

const PointAndPeakRoutes = () => {
    return (
        <div className="pnp-routes">
            <Routes>
                <Route path="/*" Component={PointAndPeakPage}/>
                <Route path="notone/*" Component={NoTonesPage}/>
                <Route path="fndsat/*" Component={FindSatPage}/>
                <Route path="mdmlck/*" Component={ModemLockPage}/>
            </Routes>
        </div>
    );
}

export default PointAndPeakRoutes;