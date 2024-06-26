<!--
    Functions
    *********
        particular business logic called as function

        Functions are used to reuse the business logic
    Types of Functions
    ******************
    1) Named Functions

    2) Anonymous Functions / 
       Nameless functions / 
       Arrow Functions / 
       Callback Functions /
       Fat Arrow Functions    (ES6)

    3) Rest Parameters in Functions   (ES6)

    4) Default Parameters in Functions  (ES6)

    5) Constructor Functions
            Prototype
            Prototype Chaining  "Object.create()"

    6) Genarator Functions     (ES6)

    7) IIFE (Immidiate Invokable Functional Expression)
        (ES9)

    8) Optional Parameters in Functions  (ES6)

1) Named Functions
******************
    The function with particular name(user defined name)
called as named function

Syntax
******
1) Function Definition

2) Function Calling

Function Definition
*******************
function function_name(param1,param2,....param n){
    business logic
}

Function Calling
****************
function_name(arg1,arg2,....arg n);
-->
<!--
<script>
    function func_one(){
        let sub_one = "ReactJS";
        let sub_two = "NodeJS";
        let sub_three = "MongoDB";
        let mern_stack = `${sub_one}...${sub_two}...${sub_three}`;
        console.log(mern_stack);
    }
    func_one();
    //ReactJS...NodeJS...MongoDB
</script>
-->

<!--
<script>
    function func_one(){
        console.log("welcome to named functions");
    }
    console.log( func_one );
    //def
</script>
-->

<!--
<script>
    function func_one(){
        return "Hello";
    }
    let res = func_one();
    console.log(res);
    //Hello
</script>
-->
<!--
<script>
    function func_one(){
        return func_two;
    }
    function func_two(){
        return "Hello";
    }
    console.log( func_one()() );
    //Hello
</script>
-->

<!--
<script>
    function func_one(param1,param2,param3){
        console.log(param1,param2,param3);
    };
    func_one("Hello_1","Hello_2","Hello_3");
    //Hello_1 Hello_2 Hello_3
    
    func_one();
    //undefined undefined undefined
    
    func_one(undefined,"Hello_2");
    //undefined 'Hello_2' undefined

    func_one(null,null,null);
    //null null null

    func_one("Hello_1","Hello_2","Hello_3","Hello_4");
    //Hello_1 Hello_2 Hello_3
</script>
-->

<!--
<script>
    let arr = [];
    function func_one(){
        return "Hello";
    }
    for(let i=0;i<5;i++){
        arr.push( func_one() );
    }
    console.log(arr);
    //['Hello', 'Hello', 'Hello', 'Hello', 'Hello']
</script>
-->

<!--
<script>
    let arr = [];
    function func_one(){
        return "Hello";
    }
    for(let i=0;i<5;i++){
        arr.push( func_one );
    }
    console.log( arr[0]() );    //Hello
    console.log( arr[1]() );    //Hello
    console.log( arr[2]() );    //Hello
    console.log( arr[3]() );    //Hello
    console.log( arr[4]() );    //Hello
</script>
-->



<!--
    Spread Operator
    ***************
        ... called as spread Operator

        spread Operator introduced in "ES6"

        spread Operator used to store more than one value

        default value of spread Operator is []

        we can pass only one spread operator per function

        spread operator must be last in occurances
-->

<!--
<script>
    function func_one(...param1){
        console.log(param1);
    }
    func_one(10,20,30);                      //[10, 20, 30]
    func_one("ReactJS","Angular13","VueJS"); //['ReactJS', 'Angular13', 'VueJS']
    func_one();                              //[]
    func_one(undefined,undefined);           //[undefined, undefined]
    func_one(null,null);                     //[null, null]
</script>
-->

<!--
<script>
    function func_one(...param1,...param2){

    }
    //A rest parameter must be last in a parameter list.
</script>
-->

<!--
<script>
    function func_one(...param2,param1){}
    //A rest parameter(spread operator) must be last in a parameter list.
</script>
-->

<!--
<script>
    function func_one(param1,...param2){
        console.log(param1,param2);
    }
    func_one();                         //undefined []
    func_one(undefined,undefined);      //undefined [undefined]
    func_one(null,null);                //null [null]
    func_one(100,100);                  //100 [100]
    func_one("Hello_1","Hello_2");      //Hello_1 ['Hello_2']
    func_one(true,false,true);          //true [false, true]
</script>
-->


<!--
    Default Parameters in Functions

        while defining the functions, we will initilize the parameters
        with default values

        This concept also introduced in ES6
-->

<!--
<script>
    function func_one(param1="Hello_1",
                      param2="Hello_2",
                      param3="Hello_3"){
        console.log(param1,param2,param3);
    }
    func_one();                                     //Hello_1 Hello_2 Hello_3
    func_one("Welcome_1","Welcome_2","Welcome_3");  //Welcome_1 Welcome_2 Welcome_3
    func_one(undefined,undefined,undefined);        //Hello_1 Hello_2 Hello_3
    func_one(null,null,null);                       //null null null
    func_one(undefined,"Welcome_2");                //Hello_1 Welcome_2 Hello_3
</script>
-->


<!--
<script>
    function func_one(param1,param2="Hello_2",...param3){
        console.log(param1,param2,param3);
    }
    func_one();                                 //undefined 'Hello_2' []
    func_one(undefined,undefined,undefined);    //undefined 'Hello_2' [undefined]
    func_one(null,null,null);                   //null null [null]
    func_one("Hello_1",undefined,"Hello_3");    //Hello_1 Hello_2 ['Hello_3']
</script>
-->


<!--
    Constructor Functions
    *********************
        collection of variables and functions called as "class"

        we can create "classes", before ES6 version by using Constructor functions

        we can create object to the class by using "new" keyword

        in Constructor functions all the members will start with "this" keyword
-->
<!--
<script>
    function class_one(){
        this.var_one = "Hello";
    }
    let obj = new class_one();
    console.log( obj.var_one );             //Hello
</script>
-->

<!--
<script>
    function class_one(){
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
        this.getSubOne = function(){
            return this.sub_one;
        }
        this.getSubTwo = function(){
            return this.sub_two;
        }
        this.getSubThree = function(){
            return this.sub_three;
        }
    }
    let obj = new class_one();
    console.log(
        obj.getSubOne(),
        obj.getSubTwo(),
        obj.getSubThree()
    );
    //ReactJS NodeJS MongoDB
</script>
-->



<!--
<script>
    function class_one(){

    };
    class_one.prototype.var_one = "Hello_1";
    let obj = new class_one();
    console.log( obj.var_one );  //Hello_1
</script>
-->
<!--
<script>
    function class_one(){

    };
    class_one.prototype.var_one = "Hello";
    class_one.prototype.fun_one = function(){
        return this.var_one;
    }
    let obj = new class_one();
    console.log( obj.fun_one() );      //Hello
</script>
-->

<!--
<script>
    function class_one(){

    };
    class_one.prototype.var_one = "Hello_1";

    function class_two(){

    }
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.var_two = "Hello_2";

    let obj1 = new class_one();
    console.log( obj1.var_one );

    let obj2 = new class_two();
    console.log(obj2.var_one, obj2.var_two );
</script>
-->

<!--
<script>
    function Parent(){
    };
    Parent.prototype.fun_one = function(){
        return "Hello_1";
    }
    function Child(){
    };
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.fun_two = function(){
        return "Hello_2";
    };
    function Subchild(){
    };
    Subchild.prototype = Object.create(Child.prototype);
    Subchild.prototype.fun_three = function(){
        return "Hello_3";
    };
    let obj1 = new Parent();
    console.log( obj1.fun_one() );

    let obj2 = new Child();
    console.log( obj2.fun_one(), obj2.fun_two() );

    let obj3 = new Subchild();
    console.log(obj3.fun_one(), obj3.fun_two(), obj3.fun_three());
</script>
-->


<!--
    IIFE
    ****
        IIFE Stands for Immidiate Invokable Functional
        Expression

        IIFE Introduced in ES9

        when ever we create IIFE, it will execute automatically


        Syntax
        ******
        ((param1,param2,param3,,,,param n)=>{
            //business logic
        })(arg1,arg2,arg3,....arg n)
-->
<!--
<script>
    (()=>{
        console.log("Hello");
    })()
    //Hello
</script>
-->

<!--
<script>
    ((param1,param2,param3)=>{
        console.log(param1,param2,param3);
    })("ReactJS","NodeJS","MongoDB");
    //ReactJS NodeJS MongoDB
</script>
-->

<!--
<script>
    for(var i=0;i<5;i++){
        ((i)=>{
            setTimeout(()=>{
                console.log(i);
            },5000)
        })(i);
    }
</script>
-->

<!--
    Genarator Functions

    Genarator Functions, controls the flow of execution

    Genarator Functions introduced in ES6

    Genarator Functions prefix with "*"

    all statements in Genarator Functions starts with "yield" keyword

    Genarator Functions returns "cursor" mechanism

    by using cursor mechanism we can control flow of execution
-->

<!--
<script>
    function *func_one(){
        yield "Hello_1";
        yield "Hello_2";
        yield "Hello_3";
    }
    let cursor = func_one();
    console.log( cursor.next() );
    console.log( cursor.next() );
    console.log( cursor.next() );
    console.log( cursor.next() );
</script>
-->



<!--
<script>
    function *func_one(){
        yield "Hello_1";
        yield *func_three();
        yield *func_two();
        yield "Hello_4";
        return "Hello_5";
        yield "Hello_6";
    }
    function *func_two(){
        yield "Hello_2";
    }
    function *func_three(){
        yield "Hello_3";
    }
    let cursor = func_one();
    for(let i=0;i<6;i++){
        console.log(cursor.next());
    }
</script>
-->

<!--
    Anonymous Functions
    *******************
        - The function without name called as Anonymous Function

        - Anonymous Functions also called as Arrow Functions

        - Arrow functions introduced in ES6

        Syntax
        ******
   var/let/const variablename = (param1,param2,param3.....param n)=>{
       business logic
   }


   variablename(arg1,arg2,arg3,....arg n);
-->

<!--
<script>
    let func_one = ()=>{
        return "welcome to arrow functions";
    }
    console.log( func_one() );
    //welcome to arrow functions
</script>
-->


<!--
<script>
    let func_one = (param1,param2,param3)=>{
        console.log(param1,param2,param3);
    }
    func_one();        //undefined undefined undefined
    func_one(undefined,"Hello_2");
                       //undefined 'Hello_2' undefined
    func_one(null,null);  
                        //null null undefined
    func_one("Hello_1","Hello_2","Hello_3","Hello_4");
                        //Hello_1 Hello_2 Hello_3
</script>
-->
<!--
<script>
    let func_one = ()=>{
       return ()=>{
           return{
               "key1":"Hello_1"
           }
       }
    }
    console.log( func_one()().key1 );
    //Hello_1
</script>
-->
<script>
    let func_one = (param1,param2,param3)=>{
        console.log( param1(),
                     param2(),
                     param3() );
    }
    func_one( ()=>{
        return "ReactJS";
    }, ()=>{
        return "NodeJS";
    }, ()=>{
        return "MongoDB";
    } );
</script>
