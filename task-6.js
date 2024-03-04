//task-6 (advanced)
function getIndexFromTime (arr) {
    let i = 0; 
    let currIndex = 0;
    const run = setInterval(function () {
        if (i < arr.length) { 
            currIndex = i;
            console.log(currIndex); 
            i++;
        } else {
            clearInterval(run);
        }
    }, 3000);
}

getIndexFromTime([1, 2, 3, 4, 5]);