import { Routes, Route } from "react-router-dom";

import EthPortsPage from "../../pages/ModemIssues/EthPortsPage";
import RebootModem from "../../pages/TSSteps/RebootModem";
import TestEthernetPorts from "../../pages/TSSteps/TestEthernetPorts";
import TestEthernetCables from "../../pages/TSSteps/TestEthernetCables";
import TestDifferentDevices from "../../pages/TSSteps/TestDifferentDevices";

const EthPortsRoutes = ({ toggleDark }) => {
    return (
        <div className="eth-ports-routes">
            <Routes>
                <Route
                    path="/*"
                    element={<EthPortsPage toggleDark={toggleDark}/>}
                />
                <Route
                    path="rbtmdm/*"
                    element={<RebootModem toggleDark={toggleDark}/>}
                />
                <Route
                    path="ethprts/*"
                    element={<TestEthernetPorts toggleDark={toggleDark}/>}
                />
                <Route
                    path="ethcbl/*"
                    element={<TestEthernetCables toggleDark={toggleDark}/>}
                />
                <Route
                    path="difdvc/*"
                    element={<TestDifferentDevices toggleDark={toggleDark}/>}
                />
            </Routes>
        </div>
    );
}

export default EthPortsRoutes;