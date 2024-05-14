import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../styles/CardsBackButton.css";

const CardBackButton = ({ handleCardsBackButton }) => {
    return (
            <button
                className="cards-back-btn"
                onClick={() => handleCardsBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
    );
}

export default CardBackButton;