import { useState } from "react";

import PointAndPeakCards from "./PointAndPeakCards";

import "../../styles/PointAndPeak/PointAndPeakView.css";

const PointAndPeakView = () => {
    return (
        <section className="pnp-view">
            <PointAndPeakCards />
        </section>
    );
}

export default PointAndPeakView;