let log = console.log
/////////////////////////////////////////////////////////////////////////

function match(usefulness, months) {
    let useScore = usefulness.reduce((a, b) => a + b, 0)
    let needs = 100;
    for (i = 1; i <= months; i++) {
        let reduction = (needs * 15) / 100;
        needs -= reduction
    }

    return useScore >= needs ? "Match!" : "No match!"
}

console.log(match([15, 24, 12], 4))