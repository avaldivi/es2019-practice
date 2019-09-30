console.log('Map function\n')
let Iam = ['Hey my', 'name is', 'slim shady']
const whoAreYou = Iam.map(word => word.split(' '))
console.log(whoAreYou)

console.log("--------------------------------------\n")
console.log('flatMap function: flat and map combined\n')
console.log(Iam.flatMap(word => word.split(' ') ))