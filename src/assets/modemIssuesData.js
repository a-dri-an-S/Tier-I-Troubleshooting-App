export const modemIssues = {
    issueTitle: 'Modem Issues',
    issueA: {
        issueTitle: "Modem Offline (Status Light Red",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Swap power supply",
                tsSteps: {
                    stepA: ["Swap the power supply on the modem with a new one.", "Make sure its not a power supply from a modem that swapped out and hasn't been RMA'd."],
                    stepB: ["If modem status light is blue, please have the tech continue with activating the modem."],
                    stepC: ["If modem status light is flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock"],
                    stepD: ["If modem status light continues red, please continue with 'Modem Offline' troubleshooting steps."]
                }
            },
            tsB: {
                tsTitle: "Check the power source",
                tsSteps: {
                    stepA: ["Check where the power supply is plugged in.", "Have the tech confirm if its plugged into a power strip or a surge protector.", "If it is plugged into either, have them plug directly into a power outlet."],
                    stepB: ["Test a different outlet."],
                    stepC: ["Test a different power outlet on a different circuit."],
                    stepD: ["If modem status light is blue, please have the tech continue with activating the modem."],
                    stepE: ["If modem status light is flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock"],
                    stepF: ["If modem status light continues red, please continue with 'Modem Offline' troubleshooting steps."],
                }
            },
            tsC: {
                tsTitle: "Swap TRIA",
                tsSteps: {
                    stepA: ["Swap with a new TRIA.", "Point and peak the TRIA."],
                    stepB: ["If modem status light is blue, please have the tech continue with activating the modem."],
                    stepC: ["If modem status light is flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock"],
                    stepD: ["If modem status light continues red, please continue with 'Modem Offline' troubleshooting steps."]
                }
            },
            tsD: {
                tsTitle: "Swap Modem",
                tsSteps: {
                    stepA: ["Swap with a new modem."],
                    stepB: ["If modem status light is blue, please have the tech continue with activating the modem."],
                    stepC: ["If modem status light is flash white, please refer to Modem Lock troubleshooting.", "LINK - Point and Peak: Modem Lock"],
                    stepD: ["If modem status light continues red, issue may be site related (power issues)."]
                }
            }
        }
    },
    issueB: {
        issueTitle: "No Wifi",
        troubleshootingStepsOffline: {
            tsA: {
                tsTitle: "Disable bridge mode (Modem GUI)",
                tsSteps: {
                    stepA: ["Tech can disable bridge mode through modem GUI, but will need a computer or laptop with an ethernet connection"],
                    stepB: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                    stepC: ["VWG modem GUI access: 192.168.100.1", "Username: admin", "Password: printed on modem sticker"],
                    stepD: ["Go to bridge mode section in modem GUI and disable.", "If disabled, modem will reboot 2 times within a 15 min window."],

                }
            }
        },
        troubleshootingStepsOnline: {
            tsA: {
                tsTitle: "Check for Viasat Shield Premium",
                tsSteps: {
                    stepA: ["Check the customers account in CRM under 'All Line Items' in the 'Support' tab."],
                    stepB: ["Look for Viasat Shield Premium add-on and check if its active"],
                    stepC: ["If Viasat Shield Premium active on the account, customer will need to troubleshoot the app to allow devices on their network"],
                    stepD: ["Customer can call CARE for Viasat Shield app assistance."],
                    stepE: ["VIASAT SHIELD PREMIUM IS ONLY AVAILABLE FOR VS2 ACCOUNTS!"]

                }
            },
            tsB: {
                tsTitle: "Check if WiFi SSID is set to Private",
                tsSteps: {
                    stepA: ["Tech can check router settings through modem GUI, but will need a computer or laptop with an ethernet connection"],
                    stepB: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                    stepC: ["VWG modem GUI access: 192.168.100.1", "Username: admin", "Password: printed on modem sticker"],
                    stepD: ["Go to WiFi settings in modem GUI and change SSID broadcast from 'Private' to 'Public'"],
                    stepE: ["If the tech doesn't have a way to access the modem GUI via ethernet, they can factory reset modem by holding 'reset' button for 60 seconds."]

                }
            },
            tsC: {
                tsTitle: "Disable Bridge Mode through ESVT",
                tsSteps: {
                    stepA: ["In ESVT, set Bridge Mode to disable to turn on the modem's internal router."],
                    stepB: ["When disabled, modem will reboot 2 times within a 15 min window."],
                    StepC: ["If modem is in Bridge Mode it is not disabling in ESVT, escalate to Tier II for TAC support."]

                }
            },
        }
    },
    issueC: {
        issueTitle: "Ethernet ports not working",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Reboot Modem",
                tsSteps: {
                    stepA: ["Have the tech reboot the modem on site or reboot through ESVT."]
                }
            },
            tsB: {
                tsTitle: "Test all ethernet ports",
                tsSteps: {
                    stepA: ["Have the tech use the same ethernet cable and device to not introduce more variables when troubleshooting port connectivity."],
                    stepB: ["Active Modem: Have the tech try to access a web page on the internet"],
                    stepC: ["Offline/Non-Active Modem: Have the tech try to access the modem GUI"],
                    stepD: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                    stepE: ["VWG modem GUI access: 192.168.100.1", "Username: admin", "Password: printed on modem sticker"]
                }
            },
            tsC: {
                tsTitle: "Test ethernet ports with different ethernet cable",
                tsSteps: {
                    stepA: ["Have the tech use a different ethernet cable, but same device to not introduce more variables when troubleshooting port connectivity."],
                    stepB: ["Active Modem: Have the tech try to access a web page on the internet"],
                    stepC: ["Offline/Non-Active Modem: Have the tech try to access the modem GUI"],
                    stepD: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                    stepE: ["VWG modem GUI access: 192.168.100.1", "Username: admin", "Password: printed on modem sticker"]
                }
            },
            tsD: {
                tsTitle: "Test ethernet ports with different device",
                tsSteps: {
                    stepA: ["Have the tech use a different device when troubleshooting port connectivity."],
                    stepB: ["Active Modem: Have the tech try to access a web page on the internet"],
                    stepC: ["Offline/Non-Active Modem: Have the tech try to access the modem GUI"],
                    stepD: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                    stepE: ["VWG modem GUI access: 192.168.100.1", "Username: admin", "Password: printed on modem sticker"]
                }
            },
        },
    },

};