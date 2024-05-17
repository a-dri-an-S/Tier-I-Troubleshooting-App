import { Routes, Route } from "react-router-dom";

import EquipmentPage from "../../pages/QOI/EquipmentPage";
import CheckCableRun2 from "../../pages/TSSteps/CheckCableRun2";
import CheckGround from "../../pages/TSSteps/CheckGround";
import ShortCableTest from "../../pages/TSSteps/ShortCableTest";
import ReplaceCable from "../../pages/TSSteps/ReplaceCable";

const EquipmentRoutes = () => {
    return (
        <div className="equip-routes">
            <Routes>
                <Route path="/*" Component={EquipmentPage} />
                <Route path="chkcbl/*" Component={CheckCableRun2} />
                <Route path="chkgrnd/*" Component={CheckGround} />
                <Route path="shrtcbl/*" Component={ShortCableTest} />
                <Route path="rplcbl/*" Component={ReplaceCable} />
            </Routes>
        </div>
    );
}

export default EquipmentRoutes;