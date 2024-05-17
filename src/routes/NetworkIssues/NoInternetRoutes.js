import { Routes, Route } from "react-router-dom";

import NoInternetPage from "../../pages/NetworkIssues/NoInternetPage";
import RebootFactoryResetModem from "../../pages/TSSteps/RebootFactoryResetModem";
import RenewIPRoutes from "./RenewIPRoutes";

const NoInternetRoutes = () => {
    return (
        <div className="no-internet-routes">
            <Routes>
                <Route path="/*" Component={NoInternetPage}/>
                <Route path="fctrstmdm/*" Component={RebootFactoryResetModem}/>
                <Route path="rnwip/*" Component={RenewIPRoutes}/>
            </Routes>
        </div>
    );
}

export default NoInternetRoutes;