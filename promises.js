<!--
    execution of tasks (code) with dependencines called as "promises"

    promises are divided into two sections

    1) promise creating

    2) promise consumption

    "Promise" is the predefined class used to create the "Promises"

    we can consume Promises in two ways.
        1) then()   (old)

        2) async & await 
-->

<!--
<script>
    let promise1 = new Promise((resolve,reject)=>{
        resolve("soon, i will start typescript");
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                                 //soon, i will start typescript
</script>
-->


<!--
<script>
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },5000);
    });

    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_2");
        },10000);
    });

    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_3");
        },15000);
    });

    // promise1.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    // promise2.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });

    // promise3.then((posRes)=>{
    //     console.log(posRes);
    // },(errRes)=>{
    //     console.log(errRes);
    // });


    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });         //['Hello_1', 'Hello_2', 'Hello_3']


    Promise.race([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });


</script>
-->



<script>
    function add(num){
        return new Promise((resolve,reject)=>{
            resolve(num+5);
        })
    }

    function sub(num){
        return new Promise((resolve,reject)=>{
            resolve(num-3);
        })
    }

    function mul(num){
        return new Promise((resolve,reject)=>{
            resolve(num*2);
        })
    }

    function div(num){
        return new Promise((resolve,reject)=>{
            resolve((num/2)-2);
        })
    }

    async function consume(){
        let addRes = await add(5);
        let subRes = await sub(addRes);
        let mulRes = await mul(subRes);
        let divRes = await div(mulRes);
        console.log(divRes);                            //5
    }

    consume();
</script>
