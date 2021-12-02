Array.from(document.body.textContent.matchAll(/([a-z]+) (\d+)/gm))
  .map(a => [ a[1] === 'forward' ? parseInt(a[2]) : 0, a[1] === 'forward' ? 0 : (a[1] === 'up' ? -parseInt(a[2]) : parseInt(a[2])) ])
  .reduceRight(([x,y], [vx, vy]) => [x+vx, y+vy])
  .reduceRight((x, y) => x*y)