const numbers = []
let providedNumber = parseInt(prompt("Type in a number"))
for (let i = 0; i <= numbers.length; i++) {
  if (numbers.includes(providedNumber)) {
    alert(`${providedNumber} has already been entered.`)
    break
  } else {
    numbers.push(providedNumber)
    providedNumber = parseInt(prompt("Type in a number"))
  }
}
numbers
  .sort((a, b) => {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })
  .map((num) => console.log(num))
