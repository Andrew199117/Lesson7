// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

//const result = [1, 2, 3, 4, 5, 6, 7, 8];

function uniteData() {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const subitem of item) {
        result.push(subitem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(uniteData());
