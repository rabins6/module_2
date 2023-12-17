const dogs = []
const dog_1 = prompt("Type 1st dog name:")
dogs.push(dog_1)

const dog_2 = prompt("Type 2nd dog name:")
dogs.push(dog_2)

const dog_3 = prompt("Type 3rd dog name:")
dogs.push(dog_3)

const dog_4 = prompt("Type 4th dog name:")
dogs.push(dog_4)

const dog_5 = prompt("Type 5th dog name:")
dogs.push(dog_5)

const dog_6 = prompt("Type 6th dog name:")
dogs.push(dog_6)

const ul = document.getElementById("dogs")

const sortedDogs = dogs.sort((a, b) => {
  if (b < a) {
    return -1
  }
  if (b > a) {
    return 1
  }
  return 0
})
sortedDogs.map((dog) => {
  let li = document.createElement("li")
  li.appendChild(document.createTextNode(dog))
  ul.appendChild(li)
})
