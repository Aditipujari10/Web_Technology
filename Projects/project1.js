
function addTask() {
  const input = document.getElementById("taskInput")
  const task = input.value

  if (task === "") {
    alert("Please enter a task")
    return
  }

  const li = document.createElement("li")
  li.textContent = task

  // delete button
  const btn = document.createElement("button")
  btn.textContent = "Delete"

  btn.onclick = function () {
    li.remove()
  }

  li.appendChild(btn)

  document.getElementById("taskList").appendChild(li)

  input.value = ""
}
