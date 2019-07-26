/** 
 creating a series of functions that will order the objects based off of their attributes
 will need to connect each function to a button later [24 - not done]
 */

// function for dynamic sorting | Name
let bathroom = [
  { Squatty: { Name: "Squatty", Rating: 3, Single: "Y", Accesible: "Y" } },
  { Potty: { Name: "Potty", Rating: 1, Single: "N", Accesible: "N" } }
];

SortByName = array => {};
let name1 = bathroom[0].Squatty.Name;
let name2 = bathroom[1].Potty.Name;

if (name1 > name2) {
  console.log(name2);
}

//console.log(bathroom[0].Squatty.Name)
