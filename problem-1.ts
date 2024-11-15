// Problem 1: DanialCodes


const sumArray = (arr: number[]): number => {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

const result_1 = sumArray([1, 2, 3, 4, 5]);

console.log(result_1);
