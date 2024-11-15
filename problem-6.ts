// Problem 6: DanialCodes

interface Profile{
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updatedFields: Partial<Profile>): Profile => {
    return { ...profile, ...updatedFields };
}

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };


// Sample Output:
console.log(updateProfile(myProfile, { age: 26 }));