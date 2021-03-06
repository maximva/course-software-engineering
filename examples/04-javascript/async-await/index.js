

function timeConsumingOperation() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('timeConsumingOperation() done!')
      resolve()
    }, 2000)
  })
}

function anOtherTimeConsumingOperation() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('anOtherTimeConsumingOperation() done!')
      resolve()
    }, 1000)
  })
}

(async () => {
  console.log('-- start --')
  await timeConsumingOperation()
  await anOtherTimeConsumingOperation()
  await timeConsumingOperation()
  await anOtherTimeConsumingOperation()
  console.log('-- done --')
})()

// Immediately-invoked Function Expressions (IIFE)
// (() => {
//   code...
// })()

// the code above is equal to the code below

// async function run() {
//   console.log('-- start --')
//   await timeConsumingOperation()
//   await anOtherTimeConsumingOperation()
//   await timeConsumingOperation()
//   await anOtherTimeConsumingOperation()
//   console.log('-- done --')
// }

// run()

