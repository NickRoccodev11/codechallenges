// program for choosing the presentation order of students

let choices = document.querySelectorAll('input[name="choices"]');
let result = document.getElementById("results");
let title = document.querySelector("h1");
let colors = ["red", "blue", "yellow", "black", "white"];

let colorChange = setInterval(() => {
  let randomNumber = Math.floor(Math.random() * colors.length);
  title.style.color = colors[randomNumber];
}, 500);

let participants = ["Teacher Nick"];

document.getElementById("attendants").addEventListener("submit", (event) => {
  event.preventDefault();
  clearInterval(colorChange);
  choices.forEach((choice) => {
    if (choice.checked) {
      if (!participants.includes(choice.value)) {
        participants.push(choice.value);
      }
    } else if (!choice.checked) {
      participants = participants.filter((student) => {
        if (student === choice.value) {
          return false;
        }
        return true;
      });
    }
  });

  let order = [];

  for (let i = 0; i < participants.length; i++) {
    let studentNotAdded = true;
    while (studentNotAdded) {
      let diceRoll = Math.floor(Math.random() * participants.length);
      let studentToAdd = participants[diceRoll];
      if (!order.includes(studentToAdd)) {
        order.push(studentToAdd);
        studentNotAdded = false;
      }
    }
  }
  result.style.display = "block";

  let list = document.getElementById("final-order");
  list.innerHTML = "";
  order.forEach((student) => {
    let listItem = document.createElement("li");
    listItem.innerText = student;
    listItem.style.fontSize = "40px";
    list.appendChild(listItem);
  });
});
