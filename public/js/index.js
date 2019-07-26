// creates a mock list of toilets

const toiletList =  [
   { Name: "Public Restroom", Rating: 2},
   { Name: "Public Restroom", Rating: 3},
   { Name: "Public Restroom", Rating: 5},
   { Name: "Public Restroom", Rating: 1},
   { Name: "library", Rating: 5},
   { Name: "Library Science University", Rating: 4},
   { Name: "Library & Center For Knowledge", Rating: 4},
   { Name: "Landscape Learning Laboratory", Rating: 3},
   { Name: "Library", Rating: 3},
   { Name: "Library Avenue", Rating:4 },
   { Name: "Library and KCSM Building 9", Rating:1},
   { Name: "Belmont Library", Rating:3},
   { Name: "La Entrada Library", Rating:4},
   { Name: "Library", Rating:3},
   { Name: "San Francisco City Hall", Rating:5},
   { Name: "US General Services Administration", Rating:1},
   { Name: "GSA General Services Administration", Rating:2},
   { Name: "US Government Accountability Office", Rating:3},
   { Name: "Library Science University", Rating:3},
   { Name: "College Track", Rating:4},
   { Name: "San Francisco DMV", Rating:5},
   { Name: "Dmv", Rating:5} ]

   //sortByRating(toiletList)

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
    console.log("butts")
  }

  let finalArray = star5.concat(star4, star3, star2, star1);
  return finalArray;
};


let result = sortByRating(toiletList)
console.log(result)
// $("#sortbutton").on("click", ()=>{
//   sortByRating()

// });



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
   /* let toiletList = [
  { Name: "John Doe", Rating: 2 },
  { Name: "Mary Sue", Rating: 3 },
  { Name: "Zebra Boy", Rating: 1 },
  { Name: "Hey Alexa", Rating: 4 },
  { Name: "Danny Devito", Rating: 5 }
]; */

