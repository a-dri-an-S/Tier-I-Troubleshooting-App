import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/GoBackButton.css"

const GoBackButton = () => {
    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);
    }
    return (
        <div>
            <button
                className="go-back-btn"
                onClick={() => handleGoBack()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default GoBackButton;