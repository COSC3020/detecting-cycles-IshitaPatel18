const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// These are all undirected graphs because Kruskal's algorithm
// is used on undirected graphs

let graph = [
  [1, 4], 
  [0, 2, 3, 4], 
  [1], 
  [1], 
  [0, 1]
];

let graph2 = [
  [1, 2],
  [0, 2],
  [0, 1],
];

let graph3 = [
  [1, 2], 
  [0], 
  [0, 3, 4], 
  [0, 2, 4], 
  [2, 3]
];

let graph4 = [
  [1, 2, 3, 4], 
  [0], 
  [0], 
  [0], 
  [0]
];
let graph5 = [
  [1], 
  [0, 2], 
  [1, 3], 
  [2]
];

let graph6 = [
  [3], 
  [4], 
  [4], 
  [0, 5, 4], 
  [1, 2, 3], 
  [3]
];

assert(JSON.stringify(hasCycle(graph)) == true);
assert(JSON.stringify(hasCycle(graph2)) == true);
assert(JSON.stringify(hasCycle(graph3)) == true);
assert(JSON.stringify(hasCycle(graph4)) == false);
assert(JSON.stringify(hasCycle(graph5)) == false);
assert(JSON.stringify(hasCycle(graph6)) == false);
assert(JSON.stringify(hasCycle([[]])) == false);
