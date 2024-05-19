import { Routes, Route } from "react-router-dom";

import RenewIPPage from "../../pages/NetworkIssues/RenewIPPage";
import ModemGUI from "../../pages/TSSteps/ModemGUI";
import WindowsOS from "../../pages/TSSteps/WindowsOS";
import MACOS from "../../pages/TSSteps/MACOS";

const RenewIPRoutes = ({ toggleDark }) => {
    return (
        <div className="renew-ip-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<RenewIPPage toggleDark={toggleDark}/>}
                />
                <Route 
                    path="gui/*" 
                    element={<ModemGUI toggleDark={toggleDark}/>}
                />
                <Route 
                    path="wnds/*" 
                    element={<WindowsOS toggleDark={toggleDark}/>}
                />
                <Route 
                    path="mac/*" 
                    element={<MACOS toggleDark={toggleDark}/>}
                />
            </Routes>
        </div>
    );
}

export default RenewIPRoutes;