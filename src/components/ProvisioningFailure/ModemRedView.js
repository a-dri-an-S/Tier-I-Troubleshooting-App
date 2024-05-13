import ModemOfflineView from "../ModemIssues/ModemOfflineView";

const ModemRedView = ({ issueChange, handleCardsBackButton }) => {
    return (
        <section className="modem-red-view">
            <ModemOfflineView handleCardsBackButton={handleCardsBackButton}/>
        </section>
    );
}

export default ModemRedView;