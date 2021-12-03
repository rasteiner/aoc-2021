const input = document.body.textContent.trim().split('\n').map(s => s.split('').map(s => parseInt(s)))

function column(arr, index) {
  return arr.map(a => a[index])
}

function sum(arr) {
  return arr.reduceRight((a, b) => a + b)
}

function mostCommon(arr, fallback) {
  const s = sum(arr)
  const l = arr.length
  if(s === l / 2) return fallback
  return +(s > l / 2)
}

let o2nums = [...input]
let co2nums = [...input]

let o2 = '';
let co2 = '';

for(let i = 0; i < 12 && o2nums.length > 1; i++) {
  const common = mostCommon(column(o2nums, i), 1)
  o2nums = o2nums.filter(a => a[i] == common)
}

for(let i = 0; i < 12 && co2nums.length > 1; i++) {
  const common = mostCommon(column(co2nums, i), 1)
  co2nums = co2nums.filter(a => a[i] != common)
}

parseInt(o2nums[0].join(''), 2) * parseInt(co2nums[0].join(''), 2)
