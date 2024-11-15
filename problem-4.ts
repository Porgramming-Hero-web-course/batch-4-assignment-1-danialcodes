// Problem 4: DanialCodes


interface Circle {
    shape: "circle";
    radius: number;
}

interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
    if(shape.shape === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    else if(shape.shape === "rectangle"){
        return shape.width * shape.height;
    }
    else{
        throw new Error("Invalid shape");
    }
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
console.log(circleArea);


// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
console.log(rectangleArea);



