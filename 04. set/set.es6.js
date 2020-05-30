const foo = new Set([1,2,3,4,5,6,6,6,6,6,6,6]);

foo.add(7);
foo.delete(7);
console.log(foo.has(7));

const test= [...foo];

foo.clear();

console.log(test);

console.log(foo.size);
for(var i in foo) {
  console.log(i);
}