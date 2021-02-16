const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2,5) // keta notun array kore.. original array k change nah korei kore
// console.log(part);

//const remove = nums.splice(2, 5); // original array k keta notun arrar  kore fale. dui number thake 5 ta number neba
const remove = nums.splice(2, 5,10,20); // 10 ABONG 20 main array te oi jaigai bose jabe
// console.log( remove);
// console.log(nums);

// const together = nums.join("") // "jekono kisu join kora jabe"
const together = nums.join(",")
console.log(together);