const input = document.body.textContent.trim().split(',').map(s => parseInt(s))

const summation = (n) => n * (n+1) / 2
const cost = (best) => input.reduce((cost, pos) => cost + summation(Math.abs(best - pos)), 0)
const avg = Math.floor(input.reduceRight((a, b) => a + b) / input.length)


// Oh! So it's randomly either `floor` or `ceil` ¯\_(ツ)_/¯ 
console.log('Result 2', Math.min(cost(avg), cost(avg+1)))