var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld1= () => {
    globalVar = 'im global';
}

helloWorld1();
console.log(globalVar);

const anotherFunction1 = () => {
    var locarVar= globalVar = 'Im Global';
}

anotherFunction1();
console.log(globalVar);