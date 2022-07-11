
const possessionsArr = ["shoes", "jacket", "belt"];
const name = ["disco"];

const createListOfPossessions = (possessionsArr, name) => {
    const possessionList = possessionsArr.map ((possession) => {
    return (name + " " + possession);})
    console.log(possessionList);
}
