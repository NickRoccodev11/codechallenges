// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that






var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 15;
    let dogYears = 15;
    if (humanYears === 2) {
        catYears = 24
        dogYears = 24
    }else if(humanYears>2){
        catYears= 24 + (humanYears-2)*4
        dogYears= 24 + (humanYears-2)*5
    }

    return [humanYears, catYears, dogYears];
}