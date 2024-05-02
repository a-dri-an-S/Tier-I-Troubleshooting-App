import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import ModemIssueView from './Modem Issues/ModemIssuesView';

import "../styles/IssueView.css";

const IssueView = ({ handleHomeButton }) => {
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
            <ModemIssueView />
        </div>
    );
}

export default IssueView;