import { Routes, Route } from "react-router-dom";

import ModemLockPage from "../pages/PointAndPeak/ModemLockPage";

const PowerSupplyRoutes = () => {
    return (
        <div className="power-supply-routes">
            <Routes>
                <Route path="/pnp/mdmlck/*" Component={ModemLockPage} />
            </Routes>
        </div>
    );
}

export default PowerSupplyRoutes;