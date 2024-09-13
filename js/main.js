// let userName = 'Vitaliy'

// const foo = () => {
//     let userName2 = 'Vasya'

//     console.log(userName + ' ' + userName2);
// }

// foo()

const makeCounter = () => {
    let count = 0;

    return () => {
        return count++;
    }
}

const counter = makeCounter();
const counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


console.log(counter2());