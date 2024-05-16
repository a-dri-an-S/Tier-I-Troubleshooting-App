import { Routes, Route } from "react-router-dom";

import EthPortsPage from "../../pages/ModemIssues/EthPortsPage";
import RebootModem from "../../pages/TSSteps/RebootModem";
import TestEthernetPorts from "../../pages/TSSteps/TestEthernetPorts";
import TestEthernetCables from "../../pages/TSSteps/TestEthernetCables";
import TestDifferentDevices from "../../pages/TSSteps/TestDifferentDevices";

const EthPortsRoutes = () => {
    return (
        <div className="eth-ports-routes">
            <Routes>
                <Route path="/*" Component={EthPortsPage}/>
                <Route path="rbtmdm/*" Component={RebootModem}/>
                <Route path="ethprts/*" Component={TestEthernetPorts}/>
                <Route path="ethcbl/*" Component={TestEthernetCables}/>
                <Route path="difdvc/*" Component={TestDifferentDevices}/>
            </Routes>
        </div>
    );
}

export default EthPortsRoutes;