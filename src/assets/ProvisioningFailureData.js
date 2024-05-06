export const provisioningFailure = {
    title: "Provisioning Failure",
    issueA: {
        issueTitle: 'Modem Status Light: Red',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check beam modem is on",
                tsSteps: {
                    stepA: ["If modem status light is red, please refer to the modem issues troubleshooting", "LINK - Modem Issues: Modem Offline"],

                }
            },
        }
    },
    issueB: {
        issueTitle: 'Modem Status Light: Flashing White',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Point and Peak",
                tsSteps: {
                    stepA: ["Have the tech point and peak the TRIA."],
                    stepB: ["If modem status light is red, please refer to the modem issues troubleshooting.", "LINK - Modem Issues: Modem Offline"],
                    stepC: ["If modem status light is blue, please have the tech continue with activating the modem."],
                    stepD: ["If modem status light continues to flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock"],
                }
            },
        }
    },
    issueC: {
        issueTitle: 'Modem Status Light: Blue',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check for system or network outages",
                tsSteps: {
                    stepA: ["Check the outage board for any beam outages or impairments"],
                    stepB: ["If there are outages or impairments, escalate to Tier II for further assistance."],
                }
            },
            tsB: {
                tsTitle: "Check CRM for account errors",
                tsSteps: {
                    stepA: ["Check under Sales > Order Items to check for any errors that could be preventing tech from activating modem"],
                    stepB: ["If errors are found, escalate to Tier II to clear errors and have tech retry again."],
                }
            },
            tsC: {
                tsTitle: "VTT activation - connection issues",
                tsSteps: {
                    stepA: ["Disconnect from the modem's WiFi and log out of app."],
                    stepB: ["Reconnect to the modem's WiFi and log back into the app."],
                    stepC: ["Select the Work Order or use the Service Activation tab and retry activation."],
                    stepD: ["Select the Work Order or use the Service Activation tab and retry activation."],
                    stepE: ["If issues continue, uninstall/reinstall app."]
                }
            },
            tsD: {
                tsTitle: "VTT activation - other issues",
                tsSteps: {
                    stepA: ["Logout and log back into app."],
                    stepB: ["Uninstall/reinstall app."],
                    stepC: ["Escalate to Tier II for additional troubleshooting."]
                }
            },
        }
    },
};