const input = document.body.textContent.trim().split(',').map(s => parseInt(s))
const sorted = input.sort((a,b) => a - b)
const best = (sorted[499] + sorted[500]) / 2

console.log('Result 1', input.reduce((cost, pos) => cost + Math.abs(best - pos), 0))
