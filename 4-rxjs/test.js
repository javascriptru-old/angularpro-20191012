
setTimeout(_ => console.log('1'))
Promise.resolve().then(_ => console.log('2'))

/*
// Event Loop
- stack
- task(macrotask)
- microtask
*/