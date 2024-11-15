// Problem 2: DanialCodes


const removeDuplicates = (arr: Array<number>): Array<number> => {
    return arr.filter((value, idx, self) => self.indexOf(value) === idx);
}

const result_2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log(result_2);
