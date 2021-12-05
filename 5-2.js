const input = document.body.textContent;

const lines = Array.from(input.matchAll(/(\d+),(\d+) -> (\d+),(\d+)/g), ([_, x1, y1, x2, y2]) => ({
    x1: parseInt(x1),
    y1: parseInt(y1),
    x2: parseInt(x2),
    y2: parseInt(y2),
}))

const bounds = lines.reduceRight((bounds, line) => ({
    x1: Math.min(line.x1, line.x2, bounds.x1),
    x2: Math.max(line.x1, line.x2, bounds.x2)+1,
    y1: Math.min(line.y1, line.y2, bounds.y1),
    y2: Math.max(line.y1, line.y2, bounds.y2)+1,
}))

const board = lines.reduce((board, line) => {
    const v = [line.x2 - line.x1, line.y2 - line.y1]
    const length = Math.max(...v.map(Math.abs))
    const step = v.map(Math.sign)
    for(let i = 0; i <= length; i++) {
        board[line.y1 + step[1] * i + 1][line.x1 + step[0] * i + 1] += 1
    }
    return board
}, new Array(bounds.y2).fill(0).map(a => new Array(bounds.x2).fill(0)))


function viz(board, bounds) {
    const w = bounds.x2, h = bounds.y2;
    
    const canvas = document.createElement('canvas')
    canvas.width = w;
    canvas.height = h;
    
    const ctx = canvas.getContext('2d')
    //const max = Math.max(...board.flat()) -> Uncaught RangeError: Maximum call stack size exceeded
    const max = board.flat().reduceRight((a, b) => Math.max(a, b))

    const buffer = new Uint8ClampedArray(
        board.flat().flatMap((a) => [...new Array(3).fill(Math.round(a / max * 255)), 255])
    );
    const data = ctx.createImageData(w, h);
    
    data.data.set(buffer)
    ctx.putImageData(data, 0,0)

    return canvas
}

console.log('Result part 2', board.flat().reduce((c, p) => c + (p > 1), 0))

document.body.appendChild(viz(board, bounds))
