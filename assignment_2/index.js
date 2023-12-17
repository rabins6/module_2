const noOfParticipants = parseInt(prompt("Type the number of participants:"))

let nameOfParticipants = []
for (let i = 0; i < noOfParticipants; i++) {
  nameOfParticipants[i] = prompt(`Type the name of ${i + 1} participant:`)
}

const ul = document.getElementById("participants")
const sortedParticipants = nameOfParticipants.sort((a, b) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
})
for (let i = 0; i < sortedParticipants.length; i++) {
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(sortedParticipants[i]))
  ul.appendChild(li)
}
