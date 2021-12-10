// insert array, where each element represents one step and its cost
var costPerStep = [10, 15, 20]; // output: 15

// calling the function
getLowestCost(costPerStep)

// function determines the minimum cost possible
function getLowestCost(costPerStep) {
    // x and y are starting point, prior to taking a step
    var x = 0;
    var y = 0;

    // control flow
    for (var i = 0; i <= costPerStep.length-1; i++) {
        var w = costPerStep[i] + Math.min(x, y);
        // the previous value is assigned to the second starting index
        y = x;
        // the new value is assigned to the first index
        x = w;
        console.log(w, x, y);
    }

    // from last loop, det min of x and y
    console.log(costPerStep)
    console.log(`The minimum sum of cost for the given stairs is: ${Math.min(x,y)}`);
}