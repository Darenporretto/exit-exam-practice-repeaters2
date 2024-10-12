/////////////////////// PROBLEM #1 ///////////////////////
/*
Directions: Declare a let variable called temperatures and assign it an array 
containing these temperatures: 42, 75, 67, 94.
 */

let temperatures;

/////////////////////// PROBLEM #2 ///////////////////////
/*
Directions: Create a function called printTempsInReverse that accepts an array 
of temperature values as a parameter. This function should print the values of 
that array in reverse only if the temperature is greater than 72.
 */

let printTempsInReverse = function() {
  
};

/////////////////////// PROBLEM #3 ///////////////////////
/*
Directions: Declare a const called sampleObject that contains 3 key/value 
pairs. The keys can be called whatever you like, and the values should be 
strings.
 */

let sampleObject;


/////////////////////// PROBLEM #4 ///////////////////////
/*
Directions: Create a function called getStringValues that takes in a parameter 
of an object. This function should return an array of only the values at each 
key of this object that are strings.
 */

let getStringValues = function() {

};

/////////////////////// PROBLEM #5 ///////////////////////
/*
Directions: Create a function called getDashKeys that takes in a paramter of an 
object. This function should return an array of only the keys of this object 
that include a dash.
- example:
var person = {
  name: "Alex",
  age: 34,
  marriage-status: "married",
  favorite-John-Carpenter-film: "Big Trouble in Little China"

};

getDashKeys(person) => ["marriage-status", "favorite-John-Carpenter-film"];
 */

let getDashKeys = function() {

};

/////////////////////// PROBLEM #6 ///////////////////////
/*
Directions: Create a function called addKeyAndValue that takes in three 
parameters - object, key, value. The parameter key represents a new key to 
add to the parameter object. The parameter value represents what the value 
for the key should be. This function should check to see if the key already 
exists in the object, and if it doesn't, this function should add the key and 
assign it value. If the key does already exist, the new value should NOT be 
applied. Finally, this function should return the object.
 */

let addKeyAndValue = function(){
  
};

/////////////////////// DATA SET //////////////////////////

const johnCarpenterMovies = [
  {
    id: 1,
    title: "Big Trouble in Little China",
    year: 1986
  },
  {
    id: 2,
    title: "The Thing",
    year: 1982
  },
  {
    id: 3,
    title: "Halloween",
    year: 1978
  }
];

/////////////////////// PROBLEM #7 ///////////////////////
/*
Directions: Create a function called get80sFilms that takes in array of John 
Carpenter movies (consider the data set above). This function should use the 
native filter method to return a new array of only the movies that were made 
between 1980 and 1989.
 */

let get80sFilms = function() {
  
};

/////////////////////// PROBLEM #7 ///////////////////////
/*
Directions: Create a function called getYearAverage that takes in an array of 
John Carpenter movies as a parameter. This function should use the native 
reduce method to return the average of the years.
 */

let getYearAverage = function(movies) {

};


/////////////////////// PROBLEM #8 ///////////////////////

const sampleObj = {
  value: 10,
  node: {
    value: 20,
    node: {
      value: 30,
      node: null
    }
  }
}

/*
Directions: Create a function called getSum that takes in a parameter of a 
nested object like above. This function return the sum of all of the value 
properties. Use recursion.
 */

let getSum = function() {
  
};

