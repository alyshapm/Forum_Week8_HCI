// edit: change function name in accordance to the provided example, boolean output, 
// fixed canGiveBlood("O-", "AB+") to come out true, used return instead of console.log
const donor = "A+";
const recipient = "AB-";

console.log(canGiveBlood(donor, recipient));

function canGiveBlood(donor, recipient) {
    if (donor === "A+") {
        switch (recipient) {
            case "A+": case "AB+":
                var output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "A-") {
        switch (recipient) {
            case "A-": case "A+": case "AB+" : case "AB-":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "B+") {
        switch (recipient) {
            case "B+": case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "B-") {
        switch (recipient) {
            case "B-": case "AB-": case "B+": case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "AB+") {
        switch (recipient) {
            case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "AB-") {
        switch (recipient) {
            case "AB-": case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "O+") {
        switch (recipient) {
            case "0+": case "A+": case "B+": case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else if (donor === "O-") {
        switch (recipient) {
            case "0-": case "A-": case "B-": case "AB-": case "0+": case "A+": case "B+": case "AB+":
                output = true;
                break;
            default:
                output = false;
        }
    } else {
        return "You have entered invalid data (Case sensitive)";
    }
    return output;
}