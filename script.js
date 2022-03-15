// 1a
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"]

console.log(`========`);

// 1b
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
};
seeDinos(...jPDinos);

console.log(`=======`);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}
console.log(`=========`);

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);
