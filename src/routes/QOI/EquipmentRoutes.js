import { Routes, Route } from "react-router-dom";

import EquipmentPage from "../../pages/QOI/EquipmentPage";
import CheckCableRun2 from "../../pages/TSSteps/CheckCableRun2";
import CheckGround from "../../pages/TSSteps/CheckGround";
import ShortCableTest from "../../pages/TSSteps/ShortCableTest";
import ReplaceCable from "../../pages/TSSteps/ReplaceCable";

const EquipmentRoutes = ({ toggleDark }) => {
    return (
        <div className="equip-routes">
            <Routes>
                <Route 
                    path="/*" 
                    element={<EquipmentPage toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkcbl/*" 
                    element={<CheckCableRun2 toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="chkgrnd/*" 
                    element={<CheckGround toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="shrtcbl/*" 
                    element={<ShortCableTest toggleDark={toggleDark}/>} 
                />
                <Route 
                    path="rplcbl/*" 
                    element={<ReplaceCable toggleDark={toggleDark}/>} 
                />
            </Routes>
        </div>
    );
}

export default EquipmentRoutes;