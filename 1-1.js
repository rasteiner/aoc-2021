//1-1 - run in console

document.body.textContent.trim().split('\n').map(s => parseInt(s)).reduce((count, current, index, arr) => count + (index>0 && arr[index-1]<current), 0)
