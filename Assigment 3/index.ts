//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use
//  the splice method to insert the valueat the specified index in the array. Return the modified array


function User(Hamad:number[],index:number,value:number)
 {
    Hamad.splice(index,0,value)
    return Array
}

var array:number[] =[23,54,56,243];
var index:number = 3;
var value:number = 69;
console.log(`before working ${array}`)
User(array,index,value);
console.log(`after working ${array}`)

// Implement a simple shopping cart program using an array. Create functions to add items, remove items,
//  and update quantities using the splice method. Print the cart's contents after each operation

function AddItem(cart:string[]) {
    cart.splice(cart.length-2,0,"Sooper")
}
function RemoveItem(cart:string[]) {
    cart.splice(cart.length-1,1)
}
function Update(cart:string[]) {
    cart.splice(cart.length-3,1,"Oreo")
}
var cart:string[]=["pizza","Sandwitch","Lays"]
console.log( `Before Add Items to Cart ${cart}`);
AddItem(cart);
console.log( `After Add Item ${cart}`);
console.log(`Before Remove Item  ${cart}`);
RemoveItem(cart);
console.log(` After Remove Item From Cart ${cart}`);
console.log(`Before Update Item ${cart}`);
Update(cart);
console.log(`After updateitem function ${cart}`);

// Write a program that uses a while loop to print the first 25 integers.

let Num:number=0;
console.log(`Num`);
while(Num<=25)
{
console.log(Num);
 Num++;
}

// Write a program that uses a while loop to print the first 10 even numbers.

let Num1:number= 0;
let evenCount:number= 0;
console.log(`Even Numbers`);
while (evenCount < 10) {
   if (Num1 % 2 === 0) {
       console.log(Num1);
       evenCount++;
   }
  Num1++;
}

// Create a function that takes a positive integer as parameter and usesa while loop to calculate and return 
// the factorial of that number.


function factorial(num:number)
{
   var factorialCal:number=1;
   while(num != 0)
   {
       factorialCal = factorialCal* num;
       num--;
   }
   return factorialCal;
}
   var result=factorial(5);
   console.log(`factorial of num`,result);

function factorial2(num:number)
{
   var factorialCal:number=1;
   while(num != 0)
   {
       factorialCal = factorialCal* num;
       num--;
   }
   return factorialCal;
}
   var result=factorial(5);
console.log(`factorial of num`,result);

// How to create a table
var table = 1;
while(table<=10){
   let result = 2 *  table;
   console.log(" 2 * "  +table+  " = " +result); 
     table= table +1
}

