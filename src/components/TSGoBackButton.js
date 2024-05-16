import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/TroubleshootPage.css";

const TSGoBackButton = () => {
    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);
    }
    return (
        <div>
            <button
                className="ts-go-back-btn"
                onClick={() => handleGoBack()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default TSGoBackButton;