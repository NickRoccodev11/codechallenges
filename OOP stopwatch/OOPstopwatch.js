let log = console.log


let train = ["Hello", "my", "Name", "is", "Anne"]

function sortMe(names) {
  names.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
return names
}


log(sortMe(train))


