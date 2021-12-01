document.body.textContent.trim().split('\n').map(s => parseInt(s))
    .reduce((windows, current, index, arr) => {
        if(index < arr.length - 2) windows.push(current + arr[index+1] + arr[index+2])
        return windows
    }, [])
    .reduce((count, current, index, arr) => count + (index>0 && arr[index-1]<current), 0)
  