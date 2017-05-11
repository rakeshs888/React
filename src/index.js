import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App5 from './App5';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';


ReactDOM.render(
  <App txt="Hello Every Body"/>,
  document.getElementById('root') 
);


ReactDOM.render(
  <App5/>,
  document.getElementById('root5') 
);

ReactDOM.render(
  <App2/>,
  document.getElementById('root2') 
);

ReactDOM.render(
  <App3/>,
  document.getElementById('root3') 
);


ReactDOM.render(
  <App4/>,
  document.getElementById('root4') 
);

ReactDOM.render(<App1 />, document.getElementById('root1'));







// var d = new Promise((resolve, reject) => {
// 	 // throw new Error('error thrown!');
// 	setTimeout(() =>{
// 		if(true){
// 		resolve('hello world');
// 	}else{
// 		reject('no boolean');
	
// 	}
// }, 500);
// });

// d.then((data) => {
// 	 console.log('success: ', data);
// 	return 'foo bar';	
// }).then((data) => {
// 	console.log('success 2 : ', data);
// }).catch((error) => console.log('error: ', error));




/// java script	
// var deliveryBoy = {
// 	name: "John",
// 	handleMessage: function (message, handler){

// 		handler(message);
// 	},

// 	receive: function(){
// 		var that = this;
// 		this.handleMessage("Hello, ", function (message){

// 			that.name;
// 			console.log(message + that.name);
// 		})
// 	}
// };
// deliveryBoy.receive();






/// es2015 


// var deliveryBoy ={
//   name: "Kiran", age : "27", 
  
//   handleMessage: function (message,handler){
//   handler(message);
//   },
  
//   receive: function () {
//     this.handleMessage("Hello , ", message => console.log(message + this.name + " " +  'Your Age is' + " " + this.age))
//   }
// }

// deliveryBoy.receive();



// function receive(complete = function(){
// 	console.log('Complete');
// }){
// 	complete();
// }
// receive();


// <-------ES6-------->


// let receive = (complete = () => console.log('Complete')) => complete()
// receive();


// const VALUE = {};
// VALUE.foo = 'bar';
// console.log('value: ', VALUE);


// // const adheres to block scope
// const foo = "baz";

// if(true){
//   const foo = "bar";
//   console.log('foo: ', foo);
// }

// console.log('foo: ', foo);

// ES5
// var color = "red";
// var speed = "10 Km/h" ;


// function go(){
// 	console.log("vroom");
// }
// var car = {
//     color,
//     speed,
//     go
// };



// console.log(car.color);
// console.log(car.speed);
// car.go();


// ES6

// var color = "red";
// var speed = "10 Km/h" ;

// var car = {
//     color,
//     speed,
//     go(){
// 	console.log("vroom");
// }
// };
// console.log(car.color);
// console.log(car.speed);
// car.go();



// var color = "red";
// var speed = 10;
// var drive = "go";
// var car = {
//     color,
//     speed,
//     [drive]: function(){
//         console.log("vroom");
//     }
// };



// console.log(car.color);
// console.log(car.speed);

// car[drive]();




//   (...) SPREAD OPERATOR

// console.log([4,7,11]);
// console.log(...[4,7,11]);
// let first = [1,2,3];
// let second = [7,11,25];
// first.push(...second);
// console.log(first);

// let first = [1,2,3];
// let second = [7,11,25];

// function addThreeThings(a,b,c){
// 	let result = a+b+c;
// 	console.log(result);
// }

// addThreeThings(...first);


// let receive = (complete = () => console.log('Complete')) => complete()
// receive();

// let addThreeThings=(a,b,c) => {let result = a+b+c;  console.log(result)
// }
// addThreeThings(...first);

// var salutation = "Hello";
// var place = "planet";
// var greeting = `${salutation}, You Crazy ${place} How Are You`; // ${ exp} for adding two strings 
// console.log(greeting);

// var x = 1;
// var y = 2;
// var equation = `${ x } + ${ y } = ${ x + y }`

// console.log(equation);

// function tag(strings, ...values){
//     if(values[0] < 20) {
//         values[1] = "awake";
//     }

//     return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
// }


// var message = tag`It's ${new Date().getHours()} I'm ${""}`;

// console.log(message);

//HTML
// var a = {
// 	color: "Red"
// }
// console.log(a.color);

//ES6

// var {color}={
//  color: "Red"
// }
//  console.log(color);

// function generateObj(){
// 	return{
// 		name: "Kiran",
// 		color: "Red",
// 		place: "USA"
// 	}
// }
// var {name, color, place} = generateObj();
// console.log(name);
// console.log(color);
// console.log(place);

// var [first,,third,,fifth]= ["I", "one","Love", "hate","You"];
// console.log(first, third, fifth);

//destructive


// var people = [
//   {
//     "firstName": "Clinton",
//     "lastName": "Ruiz",
//     "phone": "1-403-985-0449",
//     "email": "pharetra@facilisislorem.org",
//     "address": "Ap #829-3443 Nec St."
//   },
//   {
//     "firstName": "Skyler",
//     "lastName": "Carroll",
//     "phone": "1-429-754-5027",
//     "email": "Cras.vehicula.alique@diamProin.ca",
//     "address": "P.O. Box 171, 1135 Feugiat St."
//   },
//   {
//     "firstName": "Kylynn",
//     "lastName": "Madden",
//     "phone": "1-637-627-2810",
//     "email": "mollis.Duis@ante.co.uk",
//     "address": "993-6353 Aliquet, Street"
//   },
//   {
//     "firstName": "Chaney",
//     "lastName": "Edwards",
//     "phone": "1-397-181-4501",
//     "email": "rutrum@Nullamlobortis.net",
//     "address": "P.O. Box 342, 9574 Egestas Street"
//   }
// ]

// people.forEach(({firstName, address}) => console.log(firstName, address))
// // people.forEach(({address}) => console.log(address))


// var [,Kiran] = people;

// function logEmail({email}){
//   console.log(email);
// }

// logEmail(Kiran);




// GENERATOR
// function* greet(){
// 	console.log(`Hello Every Body 'next()'`);
// 	yield "fotti";
// 	console.log(`Hello Every Body 'next()'`);
// 	yield "is";
// 	console.log(`Hello Every Body 'next()'`);
// 	yield "Fofi";
// }
// let greeter = greet();
// console.log(greeter);
// let next = greeter.next();
// console.log(next);

// let greeter = greet();

// for(let word of greeter){
// 	console.log(word);
// }

// let greeter = greet();
// console.log(greeter.next().value);

// function* greet(){

// 	let friend = yield "fotti" ;
// 	friend = yield friend + "nothing";
// 	yield friend + "Fofi";
// }

// let greeting = greet();
// console.log(greeting.next().value);
// console.log(greeting.next(" is ").value);
// console.log(greeting.next("but ").value);



// function* graph(){
// 	let x = 0, y = 0;
// while(true) //is a infinite loop becoz in both the cases values are true
// {
// 	yield{X:x, Y:y} // stops the infine loop use of yield
// 	x += 2;
// 	y += 4;
// }
// }
// let asign = graph();
// console.log(asign.next().value);
// console.log(asign.next().value);
// console.log(asign.next().value);

// var myMap = new Map()
// myMap.set('foo', 'bar');    // set("key", "value")
// myMap.set('good', 'boy');
// myMap.clear(); // clears total myMap and returns 0
// console.log(myMap.get('foo'));
// console.log(myMap.has('foo')); // checks whether it has the string in declared set or not and returns boolean true or false
// console.log(myMap.size);    // returns the size of the map

//Iterators method
// keys()
// values()
//entries()

// for( var key of myMap.keys()){
// 	console.log(key);  // returns the keys in the given set
// }

// for( var values of myMap.values()){
// 	console.log(values);  // returns the keys value in the given set
// }

// for( var [keys, values] of myMap.entries()){
// 	console.log(keys + " = " + values);  // returns the both keys value in the given set using the entries() function
// }

// var myMap = new Map()
// var myObj = {};
// function myFunction(){};
// myMap.set('myObj', 'bar');    // set("key", "value")
// myMap.set('myFunction(){}', 'boy');
// for( var [keys, values] of myMap.entries()){
// 	console.log(keys + " = " + values);  // returns the both keys value in the given set using the entries() function
// }

//  iterators mehtods  cannot be used in the weakmap   var myMap = weakMap();

// ES6 Parameter Object Destructuring with Required Values

// console.clear();

// function ajax({
//   type = "get",
//   url = requiredParameter("url"),
//   data = {},
//   success = requiredParameter("success"),
//   error = () => {},
//   isAsync = true } = {}) {
// 	console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
// }

// function requiredParameter(name) {
// 	throw new Error(`Missing parameter "${name}"`);
// }

// try {
// 	ajax({
// 		url: "https://my.api.io",
// 		success: () => {}
// 	});
// } catch (e) { console.warn(e.message) }



// function ajax({
//   type = "get",
//   url = "",
//   data = {},
//   success = () => {},
//   error = () => {},
//   isAsync = true } = {}) {
// 	console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
// }

// try {
// 	ajax({
// 		url: "https://my.api.io",
// 		success: () => {}
// 	});
// } catch (e) { console.warn(e.message) }


//rest parameters vs arguments keyword

// function Store() {
//   var aisle = {
//     fruit: [],
//     vegetalbe: []
//   }
//   return {
//     //Store().add('category', 'item1', 'item2');
//     add: function(category, items) {
//       var items = [].splice.call(arguments, 1);
//       console.log(items);
//       items.forEach(function(value, index, array) {
//         aisle[category].push(value);
//       });
//     },
//     aisle: aisle
//   }
// }

// var myGroceryStore = new Store();

// myGroceryStore.add('fruit', 'apples', 'oranges');



// function Store() {
//   var aisle = {
//     fruit: [],
//     vegetalbe: []
//   }
//   return {
//     //Store().add('category', 'item1', 'item2');
//     add: function(category, ...items) {
//       //var items = [].splice.call(arguments, 1);
//       console.log(items);
//       items.forEach(function(value, index, array) {
//         aisle[category].push(value);
//       });
//     },
//     aisle: aisle
//   }
// }

// var myGroceryStore = new Store();

// myGroceryStore.add('fruit', 'apples', 'oranges');
