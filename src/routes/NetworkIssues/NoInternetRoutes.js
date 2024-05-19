import { Routes, Route } from "react-router-dom";

import NoInternetPage from "../../pages/NetworkIssues/NoInternetPage";
import RebootFactoryResetModem from "../../pages/TSSteps/RebootFactoryResetModem";
import RenewIPRoutes from "./RenewIPRoutes";

const NoInternetRoutes = ({ toggleDark }) => {
    return (
        <div className="no-internet-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<NoInternetPage toggleDark={toggleDark} />} 
                />
                <Route
                    path="fctrstmdm/*"
                    element={<RebootFactoryResetModem toggleDark={toggleDark} />} 
                />
                <Route
                    path="rnwip/*"
                    element={<RenewIPRoutes toggleDark={toggleDark} />} 
                />
            </Routes>
        </div>
    );
}

export default NoInternetRoutes;