import { Routes, Route } from "react-router-dom";

import NetworkIssuesPage from "../../pages/NetworkIssues/NetworkIssuesPage";
import SlowSpeedsRoutes from "./SlowSpeedsRoutes";
import NoInternetRoutes from "./NoInternetRoutes";

const NetworkIssuesRoutes = () => {
    return (
        <div className="network-issues-routes">
            <Routes>
                <Route path="/*" Component={NetworkIssuesPage}/>
                <Route path="slwspds/*" Component={SlowSpeedsRoutes}/>
                <Route path="noint/*" Component={NoInternetRoutes}/>
            </Routes>
        </div>
    );
}

export default NetworkIssuesRoutes;