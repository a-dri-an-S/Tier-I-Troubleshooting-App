import TSGoBackButton from "../../components/TSGoBackButton";
import "../../styles/TroubleshootPage.css";

const CheckGround = ({ toggleDark }) => {

    const toggleTitle = `troubleshoot-title ${toggleDark ? 'dark-ts-title' : 'light-ts-title'}`
    const toggleCard = `troubleshoot-card ${toggleDark ? 'dark-ts-card' : 'light-ts-card'}`;

    return (
        <div className="troubleshoot-sect">
            <h1 className={toggleTitle}>Check the Ground</h1>
            <div className={toggleCard}>
                <ul className="troubleshoot-list">
                    <li className="troubleshoot-list-item">
                        Check for approved grounding sources.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">IBT (Intersystem bonding terminal), ground rod, metallic power raceway, service equipment enclosure, #6 bare copper wire</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Check for approved ground connectors.
                        <ul className="troubleshoot-list-item">
                            <li className="troubleshoot-list-item-item">Grounding screw (for mount plate), grounding strap(for pole mount)</li>
                            <li className="troubleshoot-list-item-item">#17 messenger cable(mount to ground block)</li>
                            <li className="troubleshoot-list-item-item">#10 solid copper wire (from ground block to ground source)</li>
                        </ul>
                    </li>
                    <li className="troubleshoot-list-item">
                        Ground cable length should be no more that 20ft from ODU mount to ground block to ground source.
                    </li>
                    <li className="troubleshoot-list-item">
                        If there is no suitable grounding source, tech can use ZOP, properly secured to wall outlet and TRIA connection to modem.
                    </li>
                    <li className="troubleshoot-list-item">
                        If this does not resolve the issue, please move on to the other troubleshooting steps.
                    </li>
                </ul>
            </div>
            <TSGoBackButton toggleDark={toggleDark}/>
        </div>
    );
}

export default CheckGround;