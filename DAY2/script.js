let habits = [];

function addHabit() {
  const input = document.getElementById("habitInput");
  const habit = input.value;

  if (habit !== "") {
    habits.push(habit); // adds habit to array
    input.value = "";   // clear input
    displayHabits();
  }
}

function displayHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = ""; // clear previous list

  habits.forEach((habit) => {
    const item = document.createElement("li");
    item.innerText = habit;
    list.appendChild(item);
  });
}
