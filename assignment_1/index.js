const numbers = []
const num_1 = parseInt(prompt("Type 1st number:"))
numbers.push(num_1)

const num_2 = parseInt(prompt("Type 2nd number:"))
numbers.push(num_2)

const num_3 = parseInt(prompt("Type 3rd number:"))
numbers.push(num_3)

const num_4 = parseInt(prompt("Type 4th number:"))
numbers.push(num_4)

const num_5 = parseInt(prompt("Type 5th number:"))
numbers.push(num_5)

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i])
}
