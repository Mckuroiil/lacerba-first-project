console.log("Hello World!");
console.log("❤️ This is my First Node Project! ");

let myVar: number = 3; 
myVar += 10; //13;

console.log("myVar = ", myVar);

interface mMyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: mMyInterface= {
    myNumber: 10,
    myString: 'Hello World',
};

console.log('myNumber =', myInterface.myNumber);
console.log('myString =', myInterface.myString);