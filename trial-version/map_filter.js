var array_1 = [1, 2, 3, 4, 5, 6];
var array_2 = array_1.flatMap((x) => x * 2);
console.log(array_2);

var array_1 = ["apple", "orange", "watermelon"];
array_1.fill("kiwi");
console.log(array_1);

var array_1 = ["apple", "orange", "watermelon"];
console.log(array_1.find(startsWithA));
function startsWithA(elt) {
  return elt.startsWith("a");
}
