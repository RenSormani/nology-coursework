function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    //
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
const greeting = event.target.value;

if (greeting == "Hello") {
    alert('Bonjour')
} else if (greeting == "Goodbye") {
    alert('Au revoir')
} else {
    alert('not recognised')
}
}

function convertMilesToKilometers(event) {
    const distance = event.target.value;

    const kilometers = distance * 1.609344;
    alert(kilometers)
} 

function convertHumanYearsToDogYears(event) {
    const humanYears = event.target.value;

    const dogYears = humanYears * 7;
    alert(dogYears)
} 

function translateEnglishToItalian(event) {
    const order = event.target.value;

    if (order == "beer") {
        alert("birra")
    } else if (order == "chips") {
        alert("patate fritte")
    } else {
        alert("not recognised")
    }
}