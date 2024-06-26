/*
        variables
        *********
            variables are used to store the data
            Ex.
                string

                number

                boolean

                objects

                arrays

                ---
                ---
                ---
        by using variables we can store any type of data

        we can declare variables in 3 ways

                1) var

                2) let

                3) const

        let and const keywords introduced in ES6

        variables declaration should contain a-z, A-Z, 0-9, $ and _

        variables declaration should not start with digits


        JavaScript supports following datatypes

        1) string

        2) number

        3) boolean

        4) undefined

        5) null

        6) bigint

        7) symbol

Syntax for Variable declaration
*******************************
var/let/const variablename = value;

Ex.

var msg = "welcome to javascript"
*/


//string
//collection of characters called as string
//we will represent the string in 3 ways
//""(double quotes) , ''(single quotes) and ``(backtick) operator
//``(backtick) operator also called as template literal
//template literal introduced in ES6
//template literal used to define paragraphs
//${target_variable}

//var 123$;
//An identifier or keyword cannot immediately follow a numeric literal.
var _123;
//var #123;
var $123;

var var_one = "JavaScript";
var welcome_msg = `Welcome to ${var_one}`;
console.log(welcome_msg);
//Welcome to JavaScript

var table_name = "products";
var cost = 10000;
var sql_query = `select * from ${table_name} where cost>${cost}`;
console.log(sql_query);
//select * from products where cost>10000


//number
//javascript supports 5 types of numbers
//1) decimal
//2) double
//3) hexadecimal
//4) octal
//5) binary
//hexadecimal number prefix with "0x"
//octal number prefix with "0o"
//binary number prefix with "0b"
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, 
             double_num, 
             hexadecimal_num, 
             octal_num, 
             binary_num );
//100 100.12345 1194684 83 10
//Note : internally javascript engine will convert hexadecimal, octal and binary to "decimal"


//boolean
//true and false 
//true --- 1
//false --- 0
var flag = true;
var flag1 = false;
console.log(flag);    //true
console.log(flag1);   //false

//conditional rendering
//condtion ? true block : false block
true ? console.log("true block") : console.log("false block");
//true block
flag1 ? console.log("true block") : console.log("false block");
//false block

//{} block
console.log( true + false );            //1
console.log( true + true );             //2
console.log( false+false );             //0
console.log( true/false );              //Infinity
console.log( false/false );             //NaN


//typeof
//used to know the datatype
console.log( typeof 0x123ABC );  //number
console.log( typeof 0o123 );     //number
console.log( typeof "Sathya" );  //string
console.log( typeof true );      //boolean


//undefined
var x;
console.log(x);                 //undefined
console.log( typeof x );        //undefined
x=null;
console.log(x);                 //null
console.log( typeof x );        //object



var arr1 = [10,20,30,40,50];
//iterate
//forEach()    for...of()    for....in()
arr1.forEach( (element,index)=>{
        console.log( element, index );
} );


var frontend = ["HTML","Angular","ReactJS","VueJS","JQuery"];
var backend = ["Java","dot net", "django", "PERL","NodeJS"];
//HTML   Java
//Angular dot net
//ReactJS django
//VueJS  PERL
//JQuery NodeJS
frontend.forEach((element,index)=>{
    console.log(element,backend[index]);
});


var obj = {
   sub_one : "ReactJS",
   sub_two : "NodeJS",
   sub_three : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );

console.log( obj["sub_one"], obj["sub_two"], obj["sub_three"] );

var {sub_one,sub_two,sub_three} = obj;
console.log(sub_one,sub_two,sub_three);


//bigint
//bigint used to represent the "big/large" number
//we will represent bigint with suffix "n"
//range of bigint is ">2^53 - 1"
var large = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(large);

//symbol
//symbol used to provide the secuirity to data(variable)
var secured = Symbol("Hello");
console.log(secured);                   //Symbol(Hello)

console.log( typeof 1n );               //bigint
console.log( typeof secured );          //symbol

console.log(1n / 1n);                   //1n
console.log( 2n / 2 );                  
                      //Cannot mix BigInt and other types

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //let
//let is the keyword
//let keyword introduced in ES6
//let keyword used to define the variables

/*
    let data = 100;
    {
        let data = 200;
    }
    console.log(data);
    //var : 200   //let : 100
    //var keyword raised the global polluting issue
    //we can fix global polluting issue by using let keyword
*/

/*
    for(let i=0;i<5;i++){
        
    }
    console.log(i);
    //var : 5
    //let : ReferenceError: i is not defined
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/

/*
    console.log(x);
    let x = "Sathya";
    //var : undefined
    //let : ReferenceError: Cannot access 'x' before initialization
    //variable hoisting raised because of var keyword
    //we can fix variable hoisting with let keyword
*/

/*
    let x = 100;
    let x = 200;
    console.log(x);
    //var : 200    
    //let : SyntaxError: Identifier 'x' has already been declared
    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/

/*
            var                 let
    var keyword introduced     let keyword introduced in
    in before ES6              ES6


    global polluting issue     we can fix global polluting issue 
    raised in var keyword      with let keyword

    variable hoisting          we can fix variable hoisting with 
    raised in var keyword      let keyword

    duplicate variables         let keyword wont allows
    allowed in var keyword      duplicate variables

    scope rule break by         scope rule obey by 
    var keyword                 let keyword

    var keyword called as       let keyword called as block
    global scope keyword        scope variable
*/

//const
//const keyword introduced in ES6
//const keyword used to declare the variables
//reinitilization not possible with const keyword
const x = 100;
//x = 200;
//TypeError: Assignment to constant variable.

const arr = [1,2,3,4,5];
//arr = [];
//TypeError: Assignment to constant variable.
//arr = [100,200,300,400,500];
//TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
arr[5] = 600;
console.log(arr);
//[ 100, 200, 3, 4, 500, 600 ]


const arr1 = ["Hello_1",
              "Hello_2",
              "Hello_3",
              "Hello_4",
              "Hello_5"];
//arr1 = [];   //TypeError: Assignment to constant variable.
//arr1 = ["Welcome_1"];   //TypeError: Assignment to constant variable.
arr1[0] = "Welcome_1";
arr1[5] = "Welcome_6";
console.log(arr1);

const obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
//obj = {};
//TypeError: Assignment to constant variable.
//obj = {key1 : "Welcome_1", key2 : "Welcome_2" , key3 : "Welcome_3"};
//TypeError: Assignment to constant variable.

obj.key1 = "welcome_1";
obj.key2 = "welcome_2";
obj.key3 = "welcome_3";
console.log(obj);
//{ key1: 'welcome_1', key2: 'welcome_2', key3: 'welcome_3' } 
