let toiletList = [
  { Name: "John Doe", Rating: 2 },
  { Name: "Mary Sue", Rating: 3 },
  { Name: "Zebra Boy", Rating: 1 },
  { Name: "Hey Alexa", Rating: 4 },
  { Name: "Danny Devito", Rating: 5 }
];

let counter = 0;
let name = "";

sortByRating = database => {                    // make it a function
    let counter = 0;
    let name = "";
  for (let i = 0; i < database.length; i++) {   // this loops through the list of toilets
    const tlt = database[i];                    // shortens naming convention

    if (tlt.Rating > counter) {                 // if this beats out the best rating,
      counter = tlt.Rating;                     // this becomes the best rating
      name = tlt.Name;                          // and gains the title of "the best"

      database.unshift(tlt);                    // adds the current element to the top
      database.splice(i + 1, 1);                // takes out the "old" current element
    }
  }
};

//sortByRating(toiletList);
//console.log(toiletList);
/*
sortByName = database => {
    let firstWord = "";
  for (let i = 0; i < database.length; i++) {       // this loops through the list of toilets
    const tlt = database[i];                        // shortens naming convention

    if (tlt.Name < firstWord) {                     // if this beats out the best rating,
      firstWord = tlt.Name;                         // and gains the title of "the best"

      database.shift(tlt);                          // adds the current element to the top
      database.splice(i - 1, 1);                    // takes out the "old" current element
    }
  }
};

sortByName(toiletList);
console.log(toiletList);


//console.log(toiletList.length)
//console.log(`The best is ${name} with a rating of ${counter}!`);
*/