const input = document.body.textContent.trim().split(',').map(s => parseInt(s))
const sorted = input.sort((a,b) => a - b)

const summation = (n) => n * (n+1) / 2
const cost = (best) => sorted.reduce((cost, pos) => cost + summation(Math.abs(best - pos)), 0)

const min = sorted[0]
const max = sorted[sorted.length - 1]

function search(min, center, max) {
    if(min === max) return min

    const left = Math.floor((min + center) / 2)
    const right = Math.ceil((max + center) / 2)

    if(cost(left) < cost(right)) {
        return search(min, left, center)
    } else {
        return search(center, right, max)
    }
}

console.log('Result 2', cost(search(min, Math.round((min+max)/2), max)))