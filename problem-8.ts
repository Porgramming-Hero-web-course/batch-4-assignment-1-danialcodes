// Problem 8: DanialCodes

const validateKeys = <T extends Object>(obj: T, keys: (keyof T)[]) =>{

    let flag = true;

    keys.forEach((key) => {
        if (!(key in  obj)) {
            flag = false;
            return flag;
        }
    });
    return flag;

}

const person_8 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person_8, ["name", "age"]));