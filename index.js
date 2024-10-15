/////////////////////// PROBLEM #1 ///////////////////////
/*
Directions: Declare a let variable called temperatures and assign it an array 
containing these temperatures: 42, 75, 67, 94.
 */

let temperatures = [42, 75, 67, 94];

/////////////////////// PROBLEM #2 ///////////////////////
/*
Directions: Create a function called printTempsInReverse that accepts an array 
of temperature values as a parameter. This function should print the values of 
that array in reverse only if the temperature is greater than 72.
 */

let printTempsInReverse = function() {
  //iterate through in reverse
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let temp = temperatures[i];
    if (temp > 72) {
      console.log(temp);
    }
  }
};

/////////////////////// PROBLEM #3 ///////////////////////
/*
Directions: Declare a const called sampleObject that contains 3 key/value 
pairs. The keys can be called whatever you like, and the values should be 
strings.
 */

let sampleObject = {
  title: 'The Shining',
  author: 'Stephen King',
  genre: 'Horror'
};


/////////////////////// PROBLEM #4 ///////////////////////
/*
Directions: Create a function called getStringValues that takes in a parameter 
of an object. This function should return an array of only the values at each 
key of this object that are strings.
 */

let getStringValues = function(object) {
  //initialize array for ne string values
  let stringValues = [];
  //iterate over objects keys
  for (let key in object) {
    //check if it is a string
    if (typeof object[key] === 'string') {
      stringValues.push(object[key]);//add to the array
    }
  }
  return stringValues;
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

let getDashKeys = function(object) {
  let dashKeys = [];
  //iterate over object
  for (let key in object) {
    //check for dashes in key
    if (key.includes('-')) {
      dashKeys.push(key);//add to array
    }
  }
  return dashKeys;
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

let addKeyAndValue = function(object, key, value){
  //check if key already exists
  if (!(key in object)) {
    object[key] = value;//add key and assign value
  }
  return object;
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

let get80sFilms = function(movies) {
  //filter to return 80s movies
  return movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
};

/////////////////////// PROBLEM #7 ///////////////////////
/*
Directions: Create a function called getYearAverage that takes in an array of 
John Carpenter movies as a parameter. This function should use the native 
reduce method to return the average of the years.
 */

let getYearAverage = function(movies) {
  //redude to sum the years divide by length to get avg
  const totalYears = movies.reduce((sum, movie) => sum + movie.year, 0);
  return totalYears / movies.length; //get avg
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

let getSum = function(object) {
  //base
  if (object === null) {
    return 0;
  }
  //recursion
  return object.value + getSum(object.node);

};

