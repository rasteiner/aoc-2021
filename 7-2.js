const input = document.body.textContent.trim().split(',').map(s => parseInt(s))

const summation = (n) => n * (n+1) / 2
const cost = (best) => input.reduce((cost, pos) => cost + summation(Math.abs(best - pos)), 0)

//meh - just brute force it 
let last = Infinity, i = 0
while(true) {
    const val = cost(i)
    if(last < val) {
        break
    }
    last = val
    i++
}

console.log('Result 2', last)
