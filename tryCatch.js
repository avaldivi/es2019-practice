console.log('Try and Catch with parameter\n')
const a = 5

function tryCatchBefore() {
  try {
    console.log(b); 
  } catch (err) {
    console.error(err);
  }
}

tryCatchBefore();

console.log("--------------------------------------\n")

console.log('Try and Catch without a parameter \n')

function tryCatchAfter() {
  try {
    console.log(b);
  } catch {
    console.log('Inside catch block')
  }
}

tryCatchAfter();

console.log("--------------------------------------\n")

console.log('What do you think will happen if you remove the console.log in each catch block?')
