
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.



function periodIsLate(last, today, cycleLength) {
    // One day in milliseconds
       const oneDay = 1000 * 60 * 60 * 24;
   
       // Calculating the time difference between two dates
       const diffInTime = today.getTime() - last.getTime();
   
       // Calculating the no. of days between two dates
       const diffInDays = Math.round(diffInTime / oneDay);
     return diffInDays > cycleLength
   }