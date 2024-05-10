import CardBackButton from "../CardBackButton";

import ModemOfflineView from "../ModemIssues/ModemOfflineView";

const ModemRedView = ({ handleCardsBackButton }) => {
    return (
        <section className="modem-red-view">
            <ModemOfflineView />
            <CardBackButton handleCardsBackButton={handleCardsBackButton}/>

        </section>
    );
}

export default ModemRedView;