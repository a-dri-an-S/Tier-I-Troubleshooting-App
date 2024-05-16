import { Routes, Route } from "react-router-dom";

import NoInternetPage from "../../pages/NetworkIssues/NoInternetPage";
import RebootFactoryResetModem from "../../pages/TSSteps/RebootFactoryResetModem";
import RenewIPPage from "../../pages/NetworkIssues/RenewIPPage";

const NoInternetRoutes = () => {
    return (
        <div className="no-internet-routes">
            <Routes>
                <Route path="/*" Component={NoInternetPage}/>
                <Route path="fctrstmdm/*" Component={RebootFactoryResetModem}/>
                <Route path="rnwip/*" Component={RenewIPPage}/>
            </Routes>
        </div>
    );
}

export default NoInternetRoutes;