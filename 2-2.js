Array.from(document.body.textContent.matchAll(/([a-z]+) (\d+)/gm))
  .reduce((pos, a) => {
    const dir = a[1], amount = parseInt(a[2]);
    
    switch(dir) {
      case 'forward':
        pos[0] += amount;
        pos[1] += amount * pos[2];
        break;
      case 'up':
        pos[2] += -amount;
        break;
      case 'down':
        pos[2] += amount;
        break;
    }

    return pos;
  }, [0,0,0])
  .slice(0,2)
  .reduceRight((a, b) => a * b);