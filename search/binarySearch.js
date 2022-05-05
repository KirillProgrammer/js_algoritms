function binarySearch(item, list) {
  let low = 0,
      high = list.length - 1;
  
  while (low <= high) {
    let mid = (low + high);
    guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(1, my_list));