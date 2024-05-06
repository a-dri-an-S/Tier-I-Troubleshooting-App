import { useState } from "react";

import ProvisioningFailureCards from "./ProvisioningFailureCards";

import "../../styles/ProvisioningFailure/ProvisioningFailureView.css";

const ProvisioningFailureView = () => {
    return (
        <section className="provisioning-failure-view">
            <ProvisioningFailureCards />
        </section>
    );
}

export default ProvisioningFailureView;