let dogs = ['🐕', '🐶']
let cats = ['😺', '🐈']
const animals = [dogs, cats];
console.log('Animals Multidemensional Array\n')
console.log(animals)

console.log("--------------------------------------\n")

const flatAnimals = animals.flat();
console.log('Animals Flat Array\n')
console.log(flatAnimals);

console.log("--------------------------------------\n")
let monkeys = ['🐒', '🙊', '🙈', '🙉']
const animals2 = [dogs, cats, [monkeys]]
console.log(animals2)

console.log('Multidimensional Array using flatMap default level: 1')
console.log(animals2.flat())

console.log('Multidimensional Array using flatMap level: 2')
console.log(animals2.flat(2))