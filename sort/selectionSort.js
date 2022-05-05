const selectionSort = (list) => {
  const items = [...list] // не изменяем передаваемый массив
  const length = items.length
  for (let i = 0; i < length - 1; i++) {
    if (typeof items[i] !== 'number') {
      throw new TypeError('One of the items in your array is not a number')
    }
    let min = i
    for (let j = i + 1; j < length; j++) { 
      if (items[j] < items[min]) {
        min = j 
      }
    }
    if (min !== i) {
      [items[i], items[min]] = [items[min], items[i]]
    }
  }
  return items
}

let items = [231, 434, 534, 634, 734, 834, 9, 10, 11, 12, 13, 84, 13, 84, 526, 146, 2361, 361, 4]

console.log(selectionSort(items))