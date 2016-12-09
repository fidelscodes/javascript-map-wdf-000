// Log all elements in the array
// function map(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     const element = collection[i];
//     console.log(element);
//   }
// }

// This function will receive the element and can then optionally transform it.
// We'll also need a new array to store our results in, so we can return the result when we're done
function map(collection, callback) {
  const result = [];
 
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element));
  }
 
  return result;
}

// In case we ever need the index of the item or the full list of items in our callback function,
// let's add these as arguments to our callback.
// The callback doesn't have to use these values, but they're there if we ever need them.
function map(collection, callback) {
  const result = [];
 
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }
 
  return result;
}

// We're using Object.assign() here to defensively copy the object and change its values.
// If we didn't, the objects in the original array would get modified too.
const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
 
console.log(transformedAutobotsWithMap);
