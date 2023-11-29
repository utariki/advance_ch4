//function 1
function Display(x){
    console.log(x)

}
Display(100);

//function 2
function sayHello(){
    console.log("Hello Programer!")
    console.log("Hope you're doing great!")
}
sayHello()

//function 3
function print(str){
    if (str != '')
    return

    console.log(str)
}
print("sunnee")

//function 4
function greeting(name){
    console.log("Good morning" + " " + name)
    console.log("Programming")
}
greeting("kingdom")

//function 5
function doSum(x,y,z){
    console.log("The sum is: ")
    console.log(x+y+z)
    console.log("The average is: ")
    console.log((x+y+z)/3)
}
doSum(10,20,30)

//function 6
var car = 'toyota camry';
function myFunction(){
    var car = 'Bugati';
    console.log(car);
}
myFunction();
console.log(car);

//function 7
function multiply(num1,num2){
    return num1 * num2;
}
let x = 5;
let y = 3;
console.log("Multiplication of", x ,"and", y,"is",multiply(x,y));