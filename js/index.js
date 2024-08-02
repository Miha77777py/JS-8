// 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
    string += friends[i];
}

console.log(string);
string = "";

string = friends.join("");
console.log(string);

// 2
const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
]

console.log(cards);

// 3
const cardToRemove = "Карточка-3";
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);

// 4
const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards);

// 5
const cardToUpdate = "Карточка-4";
cards.splice(cards.indexOf(cardToUpdate), 1, "Оновлена Карточка-4")
console.log(cards);
