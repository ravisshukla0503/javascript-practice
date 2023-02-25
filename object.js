/* single object 

const person = {
    name: 'ravi',
    title: 'shukla',
    fullname: function(){
       console.log(`${this.name} ${this.title}`)
    }
}
person.fullname();
*/


/* Object consructor function used for making multiple object at a same time

let player = new Player("ravi", 8);
player.sayhello();
function Player(name, age) {
  console.log("pagal");
  this.name = name;
  this.age = age;
  this.sayhello = function (name, age) {
    console.log(`${this.name} ${this.age} hello `);
  };
}
player.nationality = 'indian';
console.log(player.nationality);
console.log("pello");
*/

/* factory function used to create new obj without new keyword and return the object directly

function Player(name, age) {
  console.log("pagal");
  this.name = name;
  this.age = age;
  this.sayhello = function (name, age) {
    console.log(`${this.name} ${this.age} hello `);
  };
  return { name, age, sayhello }
}
 let player = Player('ravi', 80);
 player.sayhello();
*/

/* set is used to store unique value and map is used to store key-value pair

const objset = new Set();
objset.add('apple');
console.log(objset);

const objmap = new Map();
objmap.set("apple", 100);
objmap.set("banana", 40);
console.log(objmap.get("apple"));

*/

/*

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

