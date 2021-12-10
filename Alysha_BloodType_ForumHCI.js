const donor = "O-";
const recipient = "AB-";

getBlood(donor, recipient)

function getBlood(donor, recipient) {
    if (donor === "A+") {
        switch (recipient) {
            case "A+": case "AB+":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "A-") {
        switch (recipient) {
            case "A-": case "A+": case "AB+" : case "AB-":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "B+") {
        switch (recipient) {
            case "B+": case "AB+":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "B-") {
        switch (recipient) {
            case "B-": case "AB-": case "B+": case "AB+":
                console.log("Compatible")
                break;
            default:
                console.log("Incompatible");
        }
    
    } else if (donor === "AB+") {
        switch (recipient) {
            case "AB+":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "AB-") {
        switch (recipient) {
            case "AB-": case "AB+":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "O+") {
        switch (recipient) {
            case "0+": case "A+": case "B+": case "AB+":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else if (donor === "O-") {
        switch (recipient) {
            case "0-": case "A-": case "B-": case "AB-":
                console.log("Compatible");
                break;
            default:
                console.log("Incompatible");
        }
    } else {
        console.log("You have entered invalid data (Case sensitive)")
    }
}
