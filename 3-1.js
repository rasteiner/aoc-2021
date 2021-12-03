const gamma = document.body.textContent.trim().split('\n')
  .map(s => s.split('').map(s => parseInt(s)*2-1))
  .reduceRight((a, b) => a.map((v, i) => v + b[i]))
  .map(v => !!((Math.sign(v)+1)/2))

parseInt(gamma.map(b => +b).join(''), 2) * parseInt(gamma.map(b => +(!b)).join(''), 2)