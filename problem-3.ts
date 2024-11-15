// Problem 3: DanialCodes


const countWordOccurrences = (sentence: string,word:string): number => {
    const words = sentence.toLowerCase().split(" ");
    let count = 0;
    words.forEach((w) => {
        if (w === word.toLowerCase()) {
            count++;
        }
    });
    return count;
}

const result_3 = countWordOccurrences("I love typescript", "typescript");

console.log(result_3);
