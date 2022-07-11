// //Attach event listener to my button
// document.querySelector(".translate-btn").addEventListener("click", () => {
//     // Get the input value
//     const englishWord = document.querySelector(".input-box").value;

//     // If word matches, put translation into DOM
//     if (englishWord === "hello") {
//         document.querySelector(".translate-result").innerHTML = "bonjour";
//     } else if (englishWord === "goodbye") {
//         document.querySelector(".translate-result").innerHTML = "au revoir";
//     } else {
//         document.querySelector(".translate-result").innerHTML = "unavailable";
//     }
// });

// Make the code more testable
// Decouple logic
// 1. Function that translates English to French
// 2. Some dom interaction in an event listener

// Accept inputs => return outputs
// const translateEnglishToFrench = (englishWord) => {
//     if (englishWord === "hello")
//         return "bonjour";
//         else if (englishWord === "goodbye") {
//             return "au revoir";
//         } else {
//             return "unavailable";
//         }
//     };

//     document.querySelector(".translate-btn").addEventListener("click", () => {
//         const englishWord = document.querySelector(".input-box").value;
//         const frenchWord = translateEnglishToFrench(englishWord);

//         document.querySelector(".translate-result").innerHTML = frenchWord;
//     });

// Function name is good. Variable names are descriptive.
// We can mae this a one line return.
const makeFullNameUpperCase = (firstName, lastName) => fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`; 
console.log(makeFullNameUpperCase("matt", "BicKELL"))

//really bad variable names - giving good variable names makes it easier to read code
const findDaysSinceBirth = (birthday) => {
    const todaysDate = new Date(); //was global now is local
    const birthDate = new Date(birthday);

    const differenceInMS = todaysDate.getTime() - birthDate.getTime();
    const MSInDay = 1000 * 60 * 60 * 24;
  
    const numberOfDaysSinceBirth = Math.floor(differenceInMS / MSInDay);

    return `${numberOfDaysSinceBirth} days since birth.`;
}

console.log(findDaysSinceBirth("03/21/1979"));

const findHeadlinesIncludingTech = (headlineArr) => {
    const techHeadlineArr = headlineArr.filter((headline) => headline.toLowerCase().includes("tech"));
    return techHeadlineArr;
}

console.log(findHeadlinesIncludingTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]))