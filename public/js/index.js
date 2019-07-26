// creates a mock list of toilets
let toiletList = [
  { Name: "John Doe", Rating: 2 },
  { Name: "Mary Sue", Rating: 3 },
  { Name: "Zebra Boy", Rating: 1 },
  { Name: "Hey Alexa", Rating: 4 },
  { Name: "Danny Devito", Rating: 5 }
];

/*
loop through each toilet in the list
    get what the rating is
    put the entry into the approriate array for that rating
*/

sortByRating = toiletList => {
  // create arrays for each rating (1-5)
    let star1 = [];
  let star2 = [];
  let star3 = [];
  let star4 = [];
  let star5 = [];

  for (let i = 0; i < toiletList.length; i++) {
    const tlt = toiletList[i];
    switch (tlt.Rating) {
      case 1:
        star1.push(tlt);
        break;

      case 2:
        star2.push(tlt);
        break;

      case 3:
        star3.push(tlt);
        break;

      case 4:
        star4.push(tlt);
        break;

      case 5:
        star5.push(tlt);
        break;
    }
  }

  let finalArray = star5.concat(star4, star3, star2, star1);
  return finalArray;
};

// OLD CODE IS BELOW

// IF-ELSE IMPLEMENTATION
/*
for (let i = 0; i < toiletList.length; i++) {
  const tlt = toiletList[i];
  //console.log(tlt.Rating)
  if (tlt.Rating === 1) {
    star1.push(tlt);
  } else if (tlt.Rating === 2) {
    star2.push(tlt);
  } else if (tlt.Rating === 3) {
    star3.push(tlt);
  } else if (tlt.Rating === 4) {
    star4.push(tlt);
  } else {
    star5.push(tlt);
  }
}
*/

// SORT FUNCTION
/*
sortByRating = toiletList => {
    // make it a function
    let counter = 0;
    //let name = "";
    for (let i = 0; i < toiletList.length; i++) {
      // this loops through the list of toilets
      const tlt = toiletList[i]; // shortens naming convention
  
      if (tlt.Rating > counter) {
        // if this beats out the best rating,
        counter = tlt.Rating; // this becomes the best rating
        name = tlt.Name; // and gains the title of "the best"
  
        toiletList.unshift(tlt); // adds the current element to the top
        toiletList.splice(i + 1, 1); // takes out the "old" current element
      }
    }
  };
*/
