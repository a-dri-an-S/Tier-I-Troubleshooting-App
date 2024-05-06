import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import IssueSelectedView from './IssueSelectedView';

import "../styles/IssueView.css";

const IssueView = ({ handleHomeButton, selectMainCard }) => {
    return (
        <div className="issue-view">
            <header className="issue-header">
                <button 
                    className="home-btn"
                    onClick={() => handleHomeButton()}
                >
                    <FontAwesomeIcon icon={faHome}/>
                </button>
            </header>
            <IssueSelectedView selectMainCard={selectMainCard}/>
        </div>
    );
}

export default IssueView;