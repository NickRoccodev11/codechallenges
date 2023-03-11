
// figure out a student average with an array of test scores

const getAverage= marks => Math.floor(marks.reduce((a,b)=> a+b, 0) /marks.length )