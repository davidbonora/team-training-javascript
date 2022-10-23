///////// Algorithms 2 - Ej 1 ////////////

function ejercicio1_2(){
let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);
}
//ejercicio1_2();
///////// Algorithms 2 - Ej 7 ////////////  

function ejercicio7_2(){

let min = 0
let max = 10
let number = Math.floor(Math.random()* (max - min +1)) + min;
let tries = 1
let answer = prompt("Please, guest the number")

while (answer != number && tries < 3) {
  tries++;
  if (answer != number) {
    alert("Try it again");
    answer = prompt("Please, guest the number")
  } if (answer == number) {
    alert("You Win!");
  }
  else if (tries == 3 && answer != number) {
    alert("Sorry, Good luck in love");
  }
}
}
//ejercicio7_2();

// algorithms 3 - exercise 3

function alg2_ex8() {
    let minmax = prompt("Password length (min. 8, max. 16):");
    while (minmax < 8 || minmax > 16) {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let mayus = prompt("Do you want to include mayus? (y/n)");
    while (mayus != "y" && mayus != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let minus = prompt("Do you want to include minus? (y/n)");
    while (minus != "y" && minus != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let nums = prompt("Do you want to include numbers? (y/n)");
    while (nums != "y" && nums != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let symb = prompt("Do you want to include symbols? (y/n)");
    while (symb != "y" && symb != "n") {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let arrayFromLowToHigh = (low, high) => {
        const array = [];
        for (let i = low; i <= high; i++) {
            array.push(i);
        }
        return array;
    };

    const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
    const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
    const NUMBER_CODES = arrayFromLowToHigh(48, 57);
    const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
        .concat(arrayFromLowToHigh(58, 64))
        .concat(arrayFromLowToHigh(91, 96))
        .concat(arrayFromLowToHigh(123, 126));

    const generatePassword = (minmax, mayus, nums, symb) => {
        let charCodes = LOWERCASE_CODES;
        if ((mayus != "n")) charCodes = charCodes.concat(UPPERCASE_CODES);
        if ((symb != "n")) charCodes = charCodes.concat(SYMBOL_CODES);
        if ((nums != "n")) charCodes = charCodes.concat(NUMBER_CODES);
        const passwordCharacters = [];
        for (let i = 0; i < minmax; i++) {
            const characterCode =
                charCodes[
                    Math.floor(
                        Math.random() *
                            (charCodes.length
                    )
                )
                ];
            passwordCharacters.push(String.fromCharCode(characterCode));
        }
        return passwordCharacters.join("");
    };

    alert(generatePassword(minmax, mayus, nums, symb))
}

// algorithms 3 - exercise 3

function alg3_ex3(color) {
    i = [];
    for (let i = 0; i < 10; i++) {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        color = randomColor.toUpperCase();
        console.log("%cHello, World!", "color: " + color);
    }
}

// algorithms 3 - exercise 9

function alg3_ex9(whatFor, str) {
    function caesarsCipherEnc(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode + 3 <= 90 ? charCode + 3 : ((charCode + 3) % 90) + 64
            );
        }
    }

    function caesarsCipherDec(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode - 3 <= 90 ? charCode - 3 : ((charCode - 3) % 90) + 64
            );
        }
    }
    whatFor = prompt("What do you need to do, (e)ncrypt or (d)ecrypt?");
    str = prompt("Enter your phrase here: (All caps please)");
    switch (whatFor) {
        case "e":
            console.log(caesarsCipherEnc(str));
            break;
        case "d":
            console.log(caesarsCipherDec(str));
            break;
        default:
            break;
    }
}

// calls

alg2_ex8();
// alg3_ex3();
// alg3_.ex9();
