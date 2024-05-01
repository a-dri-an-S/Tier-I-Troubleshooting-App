export const networkIssues = {
    issueTitle: 'Network Issues',
    issueA: {
        issueTitle: "Slow Speeds",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check customer's data use",
                tsSteps: {
                    stepA: ["Check ESVT to see if customer has gone over their data limit."],
                    stepB: ["If the customer has gone over their data limit, they will have to wait until their data use resets."],
                    stepC: ["If the customer is on an Unleashed Plan, the current data limit is 850gb.", "If on an Unleashed Plan and over the data limit, the customer will have to use less data until their data use trends below 850gb."],

                }
            },
            tsB: {
                tsTitle: "Check for low signal",
                tsSteps: {
                    stepA: ["Check ESVT for Antenna Pointing failure."],
                    stepB: ["Check for a low SNR/FL(forward link) or RL(return link), depending on what speeds are being affected.", "FL/SNR will affect download speeds.", "RL will affect upload speeds."],
                    stepC: ["If either is failing, have the tech point and peak the TRIA."],
                    stepD: ["OR LINK to QOI - Antenna Pointing"]

                }
            },
            tsC: {
                tsTitle: "Run a speed test",
                tsSteps: {
                    stepA: ["Run a speed test in ESVT to confirm speed issues"],
                    ts1: {
                        tsTitle: "Speed test fails to run assessment",
                        tsSteps: {
                            step1: ["Re-run the test again in case of error"],
                            step2: ["If it fails to run the 2nd time, check the outage board for any beam impairments or outages."],
                            step3: ["If no outages or congestion on the beam, escalate to Tier II for TAC support."],
                            step4: ['If there are outages or congestion, customer will have to wait until it resolves for speeds to return to normal.']
                        }
                    },
                    ts2: {
                        tsTitle: "Speed test confirms slow speeds",
                        tsSteps: {
                            step1: ["If speed test returns slow speeds, check the outage board for any beam impairments or outages."],
                            step2: ["If no outages or congestion on the beam, escalate to Tier II for TAC support."],
                            step3: ['If there are outages or congestion, customer will have to wait until it resolves for speeds to return to normal.']
                        }
                    },
                    ts3: {
                        tsTitle: "Speed test return advertised speeds",
                        tsSteps: {
                            step1: ["WiFi: If speeds are slow over WiFi, get device connected in closer proximity to modem.", "Customer can also purchase a separate router to connect to modem for connecting over WiFi"],
                            step2: ["Ethernet: If speeds are slow over ethernet, test a different ethernet cable or device", "Swap with a new modem, if needed"]
                        }
                    },

                }
            },
        }
    },
    issueB: {
        issueTitle: "No Internet Connection",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Reboot or Factory Reset Modem",
                tsSteps: {
                    stepA: ["Reboot modem by unplugging the power supply from power source, then reconnecting"],
                    stepB: ["Factory reset modem by holding down the reset button on the back of the modem for 60 seconds"]
                }
            },
            tsB: {
                tsTitle: "Release/Renew IP Address",
                tsSteps: {
                    stepA: {
                        ts1: {
                            tsTitle: "Modem GUI",
                            tsSteps: {
                                step1: ["Tech can access the modem GUI and release/renew IP address"],
                                step2: ["SB2+ modem GUI access: 192.168.1.1:8080", "Username and Password: admin"],
                                step3: ["VWG modem GUI access: 192.168.1.1:8080", "Username: admin", "Password: printed on modem sticker"],
                                step4: ["If this fails, escalate to Tier II for TAC support."]
                            }
                        },
                        ts2: {
                            tsTitle: "Windows OS",
                            tsSteps: {
                                step1: ["If tech has access to a Windows PC, they can release/renew IP address through terminal/command prompt"],
                                step2: ["Type cmd in Windows search field next to start up menu and open Command Prompt."],
                                step3: ["Once Command Prompt has opened, type ipconfig /release  and hit enter to release IP address."],
                                step4: ["Then type ipconfig /renew to and hit enter to renew IP address."],
                                step5: ["If this fails, escalate to Tier II for TAC support."]
                            }
                        },
                        ts3: {
                            tsTitle: "MAC OS",
                            tsSteps: {
                                step1: ["Tech can release/renew IP address through system settings"],
                                step2: ["Click on Apple menu > System Settings, then click Network in the sidebar. (You may need to scroll down.)"],
                                step3: ["Click the network service that needs a renewed IP address on the right, then click Details."],
                                step4: ["Click TCP/IP, then click Renew DHCP Lease. and click OK."],
                                step5: ["If this fails, escalate to Tier II for TAC support."]
                            }
                        }
                    }
                }
            }
        }
    }
};