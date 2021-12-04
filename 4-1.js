const text = document.body.textContent.trim()
const nums = text.split('\n')[0].split(',').map(s => parseInt(s))
const tables = Array.from(text.matchAll(/( ?\d+[ \n]?){25}/gm), ([s]) => s.trim().split('\n').map(line => line.trim().split(/ +/).map(s => parseInt(s))))

const logicTables = tables.map(table => ({
    rows: table,
    columns: table[0].reduce((columns, firstNum, index) => {
        columns.push([firstNum, ...table.slice(1).map(a => a[index])])
        return columns
    },[])
}))

for (const num of nums) {
    for(const table of logicTables) {
        table.columns = table.columns.map(col => col.filter(i => i !== num))
        table.rows = table.rows.map(row => row.filter(i => i !== num))

        if(table.columns.some(col => col.length === 0) || table.rows.some(row => row.length === 0)) {
            const sum = table.rows.flat().reduceRight((a, b) => a+b)
            throw `Result: ${sum} * ${num} = ${sum*num}`
        }
    }
}