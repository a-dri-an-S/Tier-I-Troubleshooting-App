import TSCardBackButton from "./TSCardBackButton";

import "../../styles/TroubleshootCard.css";

const CheckGround = ({ handleBackButton }) => {
    return (
        <div className="troubleshoot-sect">
            <h1 className="troubleshoot-title">Check the Ground</h1>
            <div className="troubleshoot-card">
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
                </ul>
            </div>
            <TSCardBackButton handleBackButton={handleBackButton} />
        </div>
    );
}

export default CheckGround;