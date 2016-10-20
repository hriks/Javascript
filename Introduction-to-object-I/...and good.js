for(var counter = 1;counter<21;counter++){
    if(counter%5===0&&counter%3===0){
        console.log("FizzBuzz");

    }
    else{
    if(counter%3===0){
        console.log("Fizz");
    } 
    if(counter%5===0){
        console.log("Buzz");  
    }
    if(counter%5!==0&&counter%3!==0){
        console.log(counter);  
    }
    }
}
