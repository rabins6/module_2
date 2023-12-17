const numbers = []
for (let i = 0; i <= numbers.length; i++) {
  let providedNumber = parseInt(prompt("Type in a number"))
  numbers.push(providedNumber)
  if (providedNumber === 0) {
    break
  }
}
numbers
  .sort((a, b) => {
    if (b < a) {
      return -1
    }
    if (b > a) {
      return 1
    }
    return 0
  })
  .map((num) => console.log(num))
