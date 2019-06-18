var obj = {
	a: "hello world",
	b: 42,
	c:true
};

// var array = ["hello world",42,true]
var array = [];
array.push(obj.a);
array.push(obj.b);
array.push(obj.c);


var arr = [];
for(var i=0;i<array.length;i++){
	arr.push(i);
}

const d = Date()


	function foo(){
		return 42;
	}
foo.bar = "hello world";
foo()

typeof foo; // function
typeof foo(); number
typeof foo.bar: //String

function add(x,y){
	retrun x+y;
}

// named function expression

setTimeout(function timeoutHandler(){
console.log("I waited 1 second!");},1000);

// anonymous functions 
setTimeout( function(){
	console.log("I waited 1 second!");
},1000);