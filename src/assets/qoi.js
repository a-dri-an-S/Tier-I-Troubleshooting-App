export const qoi = {
    title: "Quality of Install (QOI)",
    issueA: {
        issueTitle: 'Antenna Pointing',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check beam modem is on",
                tsSteps: {
                    stepA: ["If the tech is on the wrong beam, have them re-enter modem key.", "Point and peak the TRIA to get modem on the correct beam"],

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
                tsTitle: "Check Line of Sight(LOS)",
                tsSteps: {
                    stepA: ["Check the LOS for any obstructions.", "If there are any issues with LOS, the tech will need to work on clearing the obstructions.", "If its a new install, check uploaded photos in the FSM work order or have the tech upload one.", "If its a service call work order, check the original install work order uploaded photos or have the tech upload one."]
                }
            },
            tsD: {
                tsTitle: "Check for outages",
                tsSteps: {
                    stepA: ["Check the outage board for any outages posted for the assigned beam.", "Ask the tech about the weather on site. If there are weather issues preventing the tech from achieving modem lock, have the tech wait until weather clears or reschedule."]
                }
            },
            tsE: {
                tsTitle: "Point and Peak",
                tsSteps: {
                    stepA: ["If the beam the modem is locked to is correct, have the tech re-point and peak the TRIA."]
                }
            },
            tsF: {
                tsTitle: "Check for correct beam assignment",
                tsSteps: ["Confirm with the tech the address is correct and escalate to Tier II to check if beam assigned is correct.", "If Tier II finds a better beam, have the tech point to that beam.", "If tech is able to find the signal, have the tech point and peak to get the modem online.", "Tier II will request a beam reassignment to the new beam", "Only check if its a new install or if the account has been active for less than a year", "TECH CANNOT ACTIVATE MODEM UNTIL THE BEAM IS REASSIGNED. PLEASE WAIT FOR TIER II TO CONFIRM BEAM REASSIGNMENT BEFORE TECH ACTIVATES THE MODEM."]
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
                tsTitle: "Check cable run",
                tsSteps: {
                    stepA: ["Check for the correct cable type and length.", "RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.", "Cable length should not exceed 150ft."],
                    stepB: ["Check for any physical cable damage.", "Replace with the correct cable type, if needed"],
                    stepC: ["Check the connectors", "Check the connectors and make sure they are fit tight and not damaged.", "Connectors should be approved, weather sealed, RG6 compatible."],
                    stepD: ["Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA."]
                }
            },
            tsJ: {
                tsTitle: "Check reflector",
                tsSteps: ["Check the reflector for any visible damages, dents or warps.", "If there are any, have the tech swap the reflector."]
            }
        }
    },
    issueB: {
        issueTitle: 'Equipment (Cable and ODU',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Check cable run",
                tsSteps: {
                    stepA: ["Check for the correct cable type and length.", "RG-6, 3.0ghz, 750Ohm, solid copper coax(coaxial) cable.", "Cable length should not exceed 150ft."],
                    stepB: ["Check for any physical cable damage.", "Replace with the correct cable type, if needed"],
                    stepC: ["Check the connectors", "Check the connectors and make sure they are fit tight and not damaged.", "Connectors should be approved, weather sealed, RG6 compatible."]
                }
            },
            tsB: {
                tsTitle: "Check grounding",
                tsSteps: {
                    stepA: ["Approved grounding sources", "IBT (Intersystem bonding terminal), ground rod, metallic power raceway, service equipment enclosure, #6 bare copper wire"],
                    stepB: ["Approved ground connectors", "Grounding screw (for mount plate), grounding strap(for pole mount), #17 messenger cable(mount to ground block), #10 solid copper wire (from ground block to ground source"],
                    stepC: ["Ground cable length should be no more that 20ft from ODU mount to ground block to ground source."],
                    stepD: ["If there is no suitable grounding source, tech can use ZOP, properly secured to wall outlet and TRIA connection to modem"]
                }
            },
            tsC: {
                tsTitle: "Short cable test",
                tsSteps: {
                    stepA: ["Perform a short cable test", "Cable bypassing the ground block, directly connected between the modem and TRIA."]
                }
            },
            tsD: {
                tsTitle: "Replace the cable",
                tsSteps: ["Replace cable run with new, approved cable and connectors."]
            }

        }
    },
    issueC: {
        issueTitle: 'Software',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Power cycle modem for 3 mins",
                tsSteps: {
                    stepA: ["Have the tech unplug the modem for 3 minutes from it power source. After 3 mins, plug modem power supply back into power outlet."],
                    stepB: ["If software loaded on modem is a version known to have issues, escalate to Tier II for TAC support", "(ex. SPOCK_3.7.4.7.88"]
                }
            }

        }
    },
    issueD: {
        issueTitle: 'Installed Devices',
        troubleshootingSteps: {
            tsA: {
                tsTitle: "Connected device equal to 0",
                tsSteps: {
                    stepA: ["Check if the modem being activated is the correct modem type.", "Check the equipment in FSM to make sure it matches with what modem type is connected", "If it does match, have the tech try running QOI again", "If it still fails, escalate to Tier II for support"],
                    stepB: ["If the account is a DISH wholesale account or a commercial, legacy account and is on VS2, process the override in support portal", "DISH wholesale/commercial legacy billing accounts start with a 3 and the active modem MAC address only loads in legacy ESVT (esvt.exede.net)"]
                }
            }

        }
    },
};