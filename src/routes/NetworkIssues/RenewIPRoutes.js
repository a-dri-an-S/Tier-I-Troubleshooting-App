import { Routes, Route } from "react-router-dom";

import RenewIPPage from "../../pages/NetworkIssues/RenewIPPage";
import ModemGUI from "../../pages/TSSteps/ModemGUI";
import WindowsOS from "../../pages/TSSteps/WindowsOS";
import MACOS from "../../pages/TSSteps/MACOS";

const RenewIPRoutes = () => {
    return (
        <div className="renew-ip-routes">
            <Routes>
                <Route path="/*" Component={RenewIPPage}/>
                <Route path="gui/*" Component={ModemGUI}/>
                <Route path="wnds/*" Component={WindowsOS}/>
                <Route path="mac/*" Component={MACOS}/>
            </Routes>
        </div>
    );
}

export default RenewIPRoutes;