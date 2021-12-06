const input = document.body.textContent.trim()
const fishies = input.split(',').map(s => parseInt(s))
    .reduce((counter, fish) => {
        counter[fish] += 1;
        return counter
    }, new Array(9).fill(0))

for(let i = 0; i < 80; i++) {
    const births = fishies.shift()
    fishies[6] += births;
    fishies.push(births)
}

console.log('Result 1:', fishies.reduceRight((a, b) => a + b))