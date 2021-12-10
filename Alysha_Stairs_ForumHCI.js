var costPerStep = [10, 15, 20];

getLowestCost(costPerStep)

function getLowestCost(costPerStep) {

    var x = 0;
    var y = 0;

    for (var i = 0; i <= costPerStep.length-1; i++) {
        var z = costPerStep[i] + Math.min(x, y);
        y = x;
        x = z;
    }

    // from last loop, det min of x and y
    console.log(costPerStep)
    console.log(`The minimum sum of cost for the given stairs is: ${Math.min(x,y)}`);
}
