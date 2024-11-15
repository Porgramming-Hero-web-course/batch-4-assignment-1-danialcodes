# Type Guards in TypeScript

Type guards are essential in TypeScript as they allow for precise type checking at runtime and enable TypeScript to infer and enforce specific types within conditional blocks. By narrowing down the type of a variable, type guards ensure type safety, reduce errors, and improve code readability and maintainability. This is especially useful when dealing with union types, where a variable might represent multiple potential types.

## Types of Type Guards and Their Use Cases

### 1. `typeof` Type Guard
- **Syntax**: `typeof variable === "type"`
- **Use Case**: Primarily used for checking primitive types (`string`, `number`, `boolean`, etc.).
- **Example**:
```typescript
  function printLength(value: string | number):void {
    if (typeof value === "string") {
      console.log(value.length);
    } else {
      console.log(value);
    }
  }
```
### 2. `instanceof` Type Guard
- **Syntax**: `variable instanceof Constructor`
- **Use Case**: Suitable for checking instances of classes or specific object types.
- **Example**:
```typescript
  class Animal {}
  class Dog extends Animal {}

  function checkAnimal(animal: Animal | Dog) {
    if (animal instanceof Dog) {
        console.log("This is a Dog"); // TypeScript infers animal is a Dog
      } else {
        console.log("This is an Animal");
      }
  }
```
### 3. `in` Operator Type Guard

- **Syntax**: `"property" in object`
- **Use Case**: Useful for checking if an object has a specific property, especially in union types with different property sets.
- **Example**:
```typescript
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // TypeScript infers animal is a Fish
    } else {
        animal.fly(); // TypeScript infers animal is a Bird
        }
    }
```
### 4. User-Defined Type Guards

- **Syntax**: `function isType(variable): variable is Type`
- **Use Case**: Custom checks for complex types that typeof or instanceof cannot accurately cover, such as complex interfaces or structural checks.
- **Example**:
```typescript
    interface Car {
    drive: () => void;
    }

    interface Boat {
    sail: () => void;
    }

    function isCar(vehicle: Car | Boat): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
    }

    function move(vehicle: Car | Boat) {
    if (isCar(vehicle)) {
        vehicle.drive(); 
    } else {
        vehicle.sail(); 
    }
    }
```

