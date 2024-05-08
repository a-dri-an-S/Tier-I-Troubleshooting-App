export const pointAndPeak = {
    title: "Point and Peak",
    issueA: {
        issueTitle: 'No TRIA tones',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check Power Source",
                tsSteps: {
                    stepA: ["Check where the power supply is plugged in.", "Have the tech confirm if its plugged into a power strip or a surge protector.", "If it is plugged into either, have them plug directly into a power outlet."],
                    stepB: ["Swap the power supply.", "Make sure it is a new power supply."],
                    stepC: ["Test a different outlet."],
                    stepD: ["Test a different power outlet on a different circuit."]
                }
            },
            tsB: {
                tsTitle: "Swap TRIA",
                tsSteps: {
                    stepA: ["Swap with a new TRIA.", "Point and peak the TRIA."]
                }
            },
            tsC: {
                tsTitle: "Swap Modem",
                tsSteps: ["Swap with a new modem."]
            },
            tsD: {
                tsTitle: "Check cable run",
                tsSteps: {
                    stepA: ["Check for the correct cable type and length.", "RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.", "Cable length should not exceed 150ft."],
                    stepB: ["Check for any physical cable damage.", "Replace with the correct cable type, if needed"],
                    stepC: ["Check the connectors", "Check the connectors and make sure they are fit tight and not damaged.", "Connectors should be approved, weather sealed, RG6 compatible."],
                    stepD: ["Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA."]
                }
            }
        }
    },

    issueB: {
        issueTitle: "Unable to find the satellite or beam",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check the modem key",
                tsSteps: {
                    stepA: ["If the modem key is incorrect, re-enter the modem key."]
                }
            },
            tsB: {
                tsTitle: "Check Power Source",
                tsSteps: {
                    stepA: ["Check where the power supply is plugged in.", "Have the tech confirm if its plugged into a power strip or a surge protector.", "If it is plugged into either, have them plug directly into a power outlet."],
                    stepB: ["Swap the power supply.", "Make sure it is a new power supply."],
                    stepC: ["Test a different outlet."],
                    stepD: ["Test a different power outlet on a different circuit."]
                }
            },
            tsC: {
                tsTitle: "Check Elevation, Azimuth and Skew",
                tsSteps: {
                    stepA: ["If any are incorrect, have tech correct it and try again", "Use the Viasat Tech Tools app 'Satellite Finder' to help correct."]
                }
            },
            tsD: {
                tsTitle: "Check Line of Sight(LOS)",
                tsSteps: {
                    stepA: ["Check the LOS for any obstructions.", "If there are any issues with LOS, the tech will need to work on clearing the obstructions.", "If its a new install, check uploaded photos in the FSM work order or have the tech upload one.", "If its a service call work order, check the original install work order uploaded photos or have the tech upload one."]
                }
            },
            tsE: {
                tsTitle: "Check for a plumb mast",
                tsSteps: {
                    stepA: ["If the mast is not plumb (straight up and down), have the tech 'straighten' the mast on the mount"]
                }
            },
            tsF: {
                tsTitle: "Swap TRIA",
                tsSteps: {
                    stepA: ["Swap with a new TRIA.", "Point and peak the TRIA."]
                }
            },
            tsG: {
                tsTitle: "Swap Modem",
                tsSteps: ["Swap with a new modem."]
            },
            tsH: {
                tsTitle: "Check reflector",
                tsSteps: ["Check the reflector for any visible damages, dents or warps.", "If there are any, have the tech swap the reflector."]
            },
            tsI: {
                tsTitle: "Check for correct beam assignment",
                tsSteps: {
                    stepA: ["Confirm with the tech the address is correct and escalate to Tier II to check if beam assigned is correct.", "If Tier II finds a better beam, have the tech point to that beam.", "If tech is able to find the signal, have the tech point and peak to get the modem online.", "Tier II will request a beam reassignment to the new beam"],
                    stepB: ["Only check if its a new install or if the account has been active for less than a year."],
                    stepC: ["Check the connectors", "Please wait for Tier II to confirm beam reassignment before the tech activates the modem."]
                }
            },
            tsJ: {
                tsTitle: "Check cable run",
                tsSteps: {
                    stepA: ["Check for the correct cable type and length.", "RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.", "Cable length should not exceed 150ft."],
                    stepB: ["Check for any physical cable damage.", "Replace with the correct cable type, if needed"],
                    stepC: ["Check the connectors", "Check the connectors and make sure they are fit tight and not damaged.", "Connectors should be approved, weather sealed, RG6 compatible."],
                    stepD: ["Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA."]
                }
            }
        }
    },

    issueC: {
        tsTitle: "Unable to achieve modem lock (Can't get past network entry",
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check for outages",
                tsSteps: {
                    stepA: ["Check the outage board for any outages posted for the assigned beam."],
                    steB: ["Ask the tech about the weather on site.", "If there are weather issues preventing the tech from achieving modem lock, have the tech wait until weather clears or reschedule."]
                }
            },
            tsB: {
                tsTitle: "Check the modem key",
                tsSteps: {
                    stepA: ["If the modem key is incorrect, re-enter the modem key."]
                }
            },
            tsC: {
                tsTitle: "Check Power Source",
                tsSteps: {
                    stepA: ["Check where the power supply is plugged in.", "Have the tech confirm if its plugged into a power strip or a surge protector.", "If it is plugged into either, have them plug directly into a power outlet."],
                    stepB: ["Swap the power supply.", "Make sure it is a new power supply."],
                    stepC: ["Test a different outlet."],
                    stepD: ["Test a different power outlet on a different circuit."]
                }
            },
            tsD: {
                tsTitle: "Check Elevation, Azimuth and Skew",
                tsSteps: {
                    stepA: ["If any are incorrect, have tech correct it and try again", "Use the Viasat Tech Tools app 'Satellite Finder' to help correct."]
                }
            },
            tsE: {
                tsTitle: "Check Line of Sight(LOS)",
                tsSteps: {
                    stepA: ["Check the LOS for any obstructions.", "If there are any issues with LOS, the tech will need to work on clearing the obstructions.", "If its a new install, check uploaded photos in the FSM work order or have the tech upload one.", "If its a service call work order, check the original install work order uploaded photos or have the tech upload one."]
                }
            },
            tsF: {
                tsTitle: "Check for a plumb mast",
                tsSteps: {
                    stepA: ["If the mast is not plumb (straight up and down), have the tech 'straighten' the mast on the mount"]
                }
            },
            tsG: {
                tsTitle: "Swap TRIA",
                tsSteps: {
                    stepA: ["Swap with a new TRIA.", "Point and peak the TRIA."]
                }
            },
            tsH: {
                tsTitle: "Swap Modem",
                tsSteps: ["Swap with a new modem."]
            },
            tsI: {
                tsTitle: "Check reflector",
                tsSteps: ["Check the reflector for any visible damages, dents or warps.", "If there are any, have the tech swap the reflector."]
            },
            tsJ: {
                tsTitle: "Check for correct beam assignment",
                tsSteps: ["Confirm with the tech the address is correct and escalate to Tier II to check if beam assigned is correct.", "If Tier II finds a better beam, have the tech point to that beam.", "If tech is able to find the signal, have the tech point and peak to get the modem online.", "Tier II will request a beam reassignment to the new beam", "Only check if its a new install or if the account has been active for less than a year", "TECH CANNOT ACTIVATE MODEM UNTIL THE BEAM IS REASSIGNED. PLEASE WAIT FOR TIER II TO CONFIRM BEAM REASSIGNMENT BEFORE TECH ACTIVATES THE MODEM."]
            },
            tsK: {
                tsTitle: "Check cable run",
                tsSteps: {
                    stepA: ["Check for the correct cable type and length.", "RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.", "Cable length should not exceed 150ft."],
                    stepB: ["Check for any physical cable damage.", "Replace with the correct cable type, if needed"],
                    stepC: ["Check the connectors", "Check the connectors and make sure they are fit tight and not damaged.", "Connectors should be approved, weather sealed, RG6 compatible."],
                    stepD: ["Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA."]
                }
            }
        }
    }
};