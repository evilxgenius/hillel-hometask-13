// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array); // Результат: [1, 2, 3, 4, 6, 7]


// На вимогу ТЗ потрібно модифікувати початковий масив :)
function removeElement(array, element) {
    let posOfElement = array.indexOf(element);

    array.splice(posOfElement, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

// Погрався з іншими реалізаціями - вони повертають копію.
// function removeElement(array, element) {
//     let result = [];
//
//     for(let i of array){
//         if (i === element) continue;
//
//         result.push(i);
//     }
//
//     return result;
// }
//
// function removeElement(array, element) {
//     let posOfElement = array.indexOf(element);
//
//     return array.toSpliced(posOfElement, 1);
// }
//
// function removeElement(array, element) {
//     return array.filter(item => !item === element)
// }
