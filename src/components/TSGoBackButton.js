import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/TroubleshootPage.css";

const TSGoBackButton = ({ toggleDark }) => {
    const navigate = useNavigate();
    const toggleTSBackBtn = `ts-go-back-btn ? ${toggleDark ? 'dark-ts-back-btn' : 'light-ts-back-btn'}`;

    function handleGoBack() {
        navigate(-1);
    }
    return (
        <div>
            <button
                className={toggleTSBackBtn}
                onClick={() => handleGoBack()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default TSGoBackButton;