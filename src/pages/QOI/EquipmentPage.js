import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/EquipmentPage.css";

const EquipmentPage = () => {
    return (
        <section className="equip-page">
            <h1 className="equip-title">Equipment (Cable and ODU)</h1>
            <div className="equip-cards-cont">
                <Link className="link" to="chkcbl/">
                    <div className="equip-card" >
                        <h2 className="equip-card-title">Check the Cable Run</h2>
                    </div>
                </Link>
                <Link className="link" to="chkgrnd/">
                    <div className="equip-card" >
                        <h2 className="modem-offline-card-title">Check the Ground</h2>
                    </div>
                </Link>
                <Link className="link" to="shrtcbl/">
                    <div className="equip-card" >
                        <h2 className="equip-card-title">Short Cable Test</h2>
                    </div>
                </Link>
                <Link className="link" to="rplcbl/">
                    <div className="equip-card" >
                        <h2 className="equip-card-title">Replace the Cable</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton />
        </section>
    );
}

export default EquipmentPage;