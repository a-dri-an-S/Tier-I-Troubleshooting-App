import { Routes, Route } from "react-router-dom";

import ModemWhitePage from "../../pages/ProvisioningFailure/ModemWhitePage";
import PointAndPeak2 from "../../pages/TSSteps/PointAndPeak2";

const ModemWhiteRoutes = ({ toggleDark }) => {
    return (
        <div className="modem-white-routes">
            <Routes>
                <Route 
                    path="/*" element={<ModemWhitePage toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="pnp/*" element={<PointAndPeak2 toggleDark={toggleDark}/>} 
                />
            </Routes>
        </div>
    );
}

export default ModemWhiteRoutes;