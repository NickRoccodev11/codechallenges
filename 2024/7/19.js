function optimalFreelancing(jobs) {
  jobs.sort((a, b) => b.payment - a.payment);  // Sort jobs by payment in descending order
  let daysAvail = new Array(7).fill(false);   // Array to track available days (7 days in a week)
  let maxProf = 0;                            // Variable to track maximum profit

  for (let i = 0; i < jobs.length; i++) {
    // If the job's deadline is greater than 7, we consider only the first 7 days
    let deadline = Math.min(jobs[i].deadline, 7);

    for (let j = deadline - 1; j >= 0; j--) {
      if (!daysAvail[j]) {
        daysAvail[j] = true;
        maxProf += jobs[i].payment;
        break;  // Break the loop once the job is scheduled
      }
    }
  }
  
  return maxProf;
}
// Do not edit the line below.
exports.optimalFreelancing = optimalFreelancing;