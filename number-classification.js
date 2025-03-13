
let inputValue = 21;
console.log(inputValue)


if (typeof inputValue !== "number" && typeof inputValue !== "bigint") {
    console.log("Not a valid data type!");
} else if (typeof inputValue === "bigint") {
    console.log("Input number is not of Number datatype but it is BigInt.");
} else {
    console.log("Proceeding with classification...");

    let limits = {
        verySmall: 10,
        small: 100,
        large: 1000
    };

    if (inputValue < limits.verySmall) {
        console.log("Very small number");
    } else if (inputValue < limits.small) {
        console.log("Small number");
    } else if (inputValue < limits.large) {
        console.log("Large number");
    } else {
        console.log("Very large number");
    }
}