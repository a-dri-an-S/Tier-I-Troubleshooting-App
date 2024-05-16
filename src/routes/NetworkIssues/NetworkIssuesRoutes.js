import { Routes, Route } from "react-router-dom";

import NetworkIssuesPage from "../../pages/NetworkIssues/NetworkIssuesPage";
import SlowSpeedsPage from "../../pages/NetworkIssues/SlowSpeedsPage";
import NoInternetPage from "../../pages/NetworkIssues/NoInternetPage";

const NetworkIssuesRoutes = () => {
    return (
        <div className="network-issues-routes">
            <Routes>
                <Route path="/*" Component={NetworkIssuesPage}/>
                <Route path="slwspds/*" Component={SlowSpeedsPage}/>
                <Route path="noint/*" Component={NoInternetPage}/>
            </Routes>
        </div>
    );
}

export default NetworkIssuesRoutes;