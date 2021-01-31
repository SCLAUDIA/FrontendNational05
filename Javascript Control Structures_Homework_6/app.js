//                          1. Using control structures, do the following:
//                          a) display in the console the numbers from 1 to 20

function numbersFrom1to20(){
    var ResultHere=document.getElementById("ex1a");
    var str='';
    for (var i=1; i <= 20; i++) {
        // console.log(i);  
         str=str+i;
    }
    ResultHere.innerHTML = "Show numbers: " +str ; 
}

//                          1. Using control structures, do the following:
//                          b) display in the console the odd numbers from 1 to 20

function oddNumbersFrom1to20(){
    var ResultHere=document.getElementById("ex1b");
    var str='';
    for (var i=1; i <= 20; i++){
        if (i%2==1 )
    // console.log(a);
        str=str+i;
    }
    ResultHere.innerHTML = "Show numbers: "  +str ;  
}

//                          2. For var list = [2, 3, 5, 7, 5, 3]:
//                          a) compute the sum of the elements of an array and display it in the console

function sumOfElementsFromAnArray(){
    var output = document.getElementById("ex2a");
    var arr=[2, 3, 5, 7, 5, 3];
    var sum = 0;
    for ( var i = 0; i<=arr.length-1; i++){
        sum = sum + arr[i];
      }
    output.innerHTML = "The sum is: " + sum;
}

//                          2. For var list = [2, 3, 5, 7, 5, 3]:
//                          b) compute the maximum of the elements of an array and display it in the console

function maxOfElementsFromAnArray(){
    var output = document.getElementById("ex2b");
    var arr = [2, 3, 5, 7, 5, 3];
    var maxValue = Math.max.apply(null, arr);
    // console.log(maxValue);
    output.innerHTML = "The maximum is: " +maxValue ;
}

//                          2. For var list = [2, 3, 5, 7, 5, 3]:
//                          c) compute how many times a certain element appears in an array

function manyTimesAppearingElementsFromAnArray(){
    var arr = [2, 3, 5, 7, 5, 3];
    var count ={};
    for (var i=0; i<arr.length; i++){
        var val = arr[i];
        count[val] = count[val] ? count[val]+1 :1;
    }
console.log(count);
}

//                       3. Write a program to print Fibonacci series of the first 50 terms:


function fibonacciSeries(){
    var fib=[];
    fib[0]=0;
    fib[1]=1;

    for(var i=fib.length; i<=50; i++){
        fib[i] = fib[i-2] + fib [i-1];
        console.log(fib);
    } 
}



//                    4. Write a program that prints the numbers from 1 to 100 - “FizzBuzz” Exercise

function fizzBuzz(){
    // var output = document.getElementById("ex4");
    for (var i=1; i<=100; i++){
        if (i%3==0 && i%5==0)
        console.log("Print: FizzBuzz");
        else if (i%3==0)
        console.log("Print: Fizz");
        else if (i%5==0)
        console.log("Print: Buzz");
        else
        console.log(i);
    }
    // output.innerHTML = "The result is: "  ;
}

