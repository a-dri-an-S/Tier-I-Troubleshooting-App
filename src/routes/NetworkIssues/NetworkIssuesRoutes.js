import { Routes, Route } from "react-router-dom";

import NetworkIssuesPage from "../../pages/NetworkIssues/NetworkIssuesPage";
import SlowSpeedsRoutes from "./SlowSpeedsRoutes";
import NoInternetRoutes from "./NoInternetRoutes";

const NetworkIssuesRoutes = ({ toggleDark }) => {
    return (
        <div className="network-issues-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<NetworkIssuesPage toggleDark={toggleDark}/>}
                />
                <Route 
                    path="slwspds/*" 
                    element={<SlowSpeedsRoutes toggleDark={toggleDark}/>}
                />
                <Route 
                    path="noint/*" 
                    element={<NoInternetRoutes toggleDark={toggleDark}/>}
                />
            </Routes>
        </div>
    );
}

export default NetworkIssuesRoutes;