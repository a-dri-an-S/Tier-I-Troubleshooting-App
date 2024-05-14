import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../styles/TroubleshootCard.css"

const TSCardBackButton = ({ handleBackButton }) => {
    return (
        <button
            className="ts-card-back-btn"
            onClick={() => handleBackButton()}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
}

export default TSCardBackButton;