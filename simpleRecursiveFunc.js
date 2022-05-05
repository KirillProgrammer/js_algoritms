const sumNumInArr = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sumNumInArr(list.slice(1));
  }
}
const arr = [131, 132, 133, 134, 135, 1213, 512, 1341, 125, 5],
      arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
console.log(sumNumInArr(arr2));