
// task1

const sentence = ["sense.", "make", "all", "will", "This"];

const reverseArray = (arr) => arr.reverse();

console.log(reverseArray(sentence));

// task2

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = (arr) =>
  arr.forEach((name) =>
    console.log(
      `Oh powerful ${name}, we humans offer our unconditional surrender!`
    )
  );

greetAliens(aliens);

// task3

const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos",
  ];
  const myStuff = ["sweaters", "skateboards", "family-night", "my room"];
  
  const justCoolStuff = (firstArr, secondArr) => {
    return firstArr.filter((element) => secondArr.includes(element));
  };
  
  console.log(justCoolStuff(myStuff, coolStuff));
  
//   task4

const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
];
const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
];


function isTheDinnerVegan(meal) {
    let type = true;
    meal.forEach(element => {
        const source = Object.values(element)[1];
        if (source != 'plant') {
            type = false;
        }
    });
    return type;
}

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));