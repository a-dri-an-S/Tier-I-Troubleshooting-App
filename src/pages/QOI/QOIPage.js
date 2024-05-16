import "../../styles/QOI/QOIPage.css";

const QOIPage = () => {
    return (
        <section className="qoi-page">
            <h1 className="qoi-title">Quality of Install(QOI)</h1>
            <div className="qoi-cards-cont">
                <div
                    className="qoi-card"
                    id="0"
                >
                    <h2 className="qoi-card-title">Antenna Pointing</h2>
                </div>
                <div
                    className="qoi-card"
                    id="1"
                >
                    <h2 className="qoi-card-title">Antenna Pointing - Afterburner</h2>
                </div>
                <div
                    className="qoi-card"
                    id="2"
                >
                    <h2 className="qoi-card-title">Equipment (Cable and ODU)</h2>
                </div>
                <div
                    className="qoi-card"
                    id="3"
                >
                    <h2 className="qoi-card-title">Software</h2>
                </div>
                <div
                    className="qoi-card"
                    id="4"
                >
                    <h2 className="qoi-card-title">Installed Devices</h2>
                </div>
            </div>
        </section>
    );
}

export default QOIPage;