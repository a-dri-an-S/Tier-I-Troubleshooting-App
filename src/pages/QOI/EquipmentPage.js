import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import "../../styles/QOI/EquipmentPage.css";

const EquipmentPage = ({ toggleDark }) => {

    const toggleTitle = `equip-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `equip-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="equip-page">
            <h1 className={toggleTitle}>Equipment (Cable and ODU)</h1>
            <div className="equip-cards-cont">
                <Link className="link" to="chkcbl/">
                    <div className={toggleCard} >
                        <h2 className="equip-card-title">Check the Cable Run</h2>
                    </div>
                </Link>
                <Link className="link" to="chkgrnd/">
                    <div className={toggleCard} >
                        <h2 className="modem-offline-card-title">Check the Ground</h2>
                    </div>
                </Link>
                <Link className="link" to="shrtcbl/">
                    <div className={toggleCard} >
                        <h2 className="equip-card-title">Short Cable Test</h2>
                    </div>
                </Link>
                <Link className="link" to="rplcbl/">
                    <div className={toggleCard} >
                        <h2 className="equip-card-title">Replace the Cable</h2>
                    </div>
                </Link>
            </div>
            <GoBackButton toggleDark={toggleDark}/>
        </section>
    );
}

export default EquipmentPage;