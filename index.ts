let userName: string = "TypeScript User";
let repetitions: number = 5;

function greetUser(name: string, times: number) {
    for (let i = 0; i < times; i++) {
        console.log(`Hello, ${name}! This is greeting number ${i + 1}.`);
    }
}

greetUser(userName, repetitions);
