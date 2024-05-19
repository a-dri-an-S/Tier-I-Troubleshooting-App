import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/GoBackButton.css"

const GoBackButton = ({ toggleDark }) => {

    const toggleBackBtn = `go-back-btn ? ${toggleDark ? 'dark-back-btn' : 'light-back-btn'}`;

    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);
    }
    return (
        <div>
            <button
                className={toggleBackBtn}
                onClick={() => handleGoBack()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default GoBackButton;