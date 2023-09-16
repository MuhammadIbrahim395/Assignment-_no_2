//  Name = Muhammad Ibrahim , Date = 7,sep,2023

// in this assignment i performed many quistions, no doubt questions are bit difficult but i tried my best to solve the problems

console.log("Q no 1");
//Install Node.js, TypeScript and VS Code on your computer.

1//here is the link of node.js website where you can install
// https://nodejs.org/en
2// open the cmd after download he node.js and write npm install -g typescript . 
3//here is the link of VS Code website where you can install
//https://code.visualstudio.com/download

console.log("Q no 2");
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let userName:string="Ahmad"
console.log(` Hello ${userName} would you like to learn some Typescript today? `);

console.log("Q no 3");
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let Name:string="Usama"
console.log(Name.toLowerCase()) // usama
console.log(Name.toUpperCase()) // USAMA

function titlecase(input:string){
     let words=input.split( " " );
     for(let i=0; i<words.length; i++){
     let word=words[i]
     word=word[0].toUpperCase() + word.slice(1).toLowerCase()
    words[i]=word}
return words.join(" ")
}
console.log(titlecase("ibrahim"));

console.log("Q no 4");
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote :string="Absolutely not!"
console.log(`"Imran Khan Once said ",${quote}"`);
console.log("Q no 5");
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string="Albert Einstein"
let quote2 :string="A person who never made a mistake never tried anything new."
let message:string = `${famous_person}Once said "${quote2}"`
console.log(message);

console.log("Q no 6");
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName:string= "\t Muhammad Ibrahim \n";
console.log("Name with witespace:" , personName);
let strippedName :string= personName.trim()
console.log("Stripped Name:" , strippedName);

console.log("Q no 7 & 8");
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("When two numbers add:",5 + 3);
console.log("When two numbers subtraction:",10 - 2);
console.log("When two numbers multiplication:",4 * 2);
console.log("When two numbers division:",16 / 2);

console.log("Q no 9");
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber:number = 8;
console.log("My favorite number is =",favoriteNumber);

console.log("Q no 10");
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does

// Comments are used to describe the logic, it is not executed but it is essential to use them. 
let a: string = "i don't have time to do your homework" //in this line i give you my comment.
let b = a.split(" ") // in this way i convert each word into string in an array.
a = b.join(" ")// in this way i again convet it into string.
console.log(a);


let electricityBill:number=0  // in the begining of the day 0f the month the units are.
for(let i=0; i<30; i++){
    electricityBill+=12; //12 units are used each day.
}
console.log("Total units are =",electricityBill);
console.log("Other taxes you must be pay otherwise your connection disconnected");


console.log("Q no 11");
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names:string[]=["Hasseb","Moaz","Usama","Ahmad"]
for(let i:number=0; i<names.length; i++){
  
    console.log(names[i]);
}

console.log("Q no 12");
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friendsNames:string[]=["Hasseb","Moaz","Usama","Ahmad"]
for(let i:number=0; i<names.length; i++){
  
    console.log("Hello my friend",names[i]);
}

console.log("Q no 13");
// //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.

let list:string[]=["Civic Honda car.","Changan company car.","Yaris car."," Fortuner car.","Suzuki Wagon R."]

for(let i:number=0; i<list.length; i++){

    console.log("This is my favorite mode of transportation:",list[i] ,"i would own this inshallah one day:");
 }
console.log("Q no 14 & 15");
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.

let guestList = ["Ahmad", "Usama", "Moaz", "Hasseb"]
console.log(`I'm sorry to tell that, ${guestList[3]} will not join us the dinner. `)
for (let i = 0; i < guestList.length; i++) {
    //You just heard that one of your guests can’t make the dinner, You’ll have to think of someone else to invite.
    guestList.splice(3, 1, "Usman")
    console.log("Mr,", guestList[i], "Join me for a delightful dinner on September 10th!")
    console.log("I am very happy if you come my dinner");

}
console.log("Q no 16");

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("I inform you that i found a bigger dinner table, more space for dinner.");
guestList.unshift("Rehan")
guestList.splice(Math.floor(guestList.length / 2), 0, "Bilal")
guestList.push("Hamza")
for (let i = 0; i < guestList.length; i++) {
    console.log(`"I inform you that,${guestList[i]} three new guest join us our dinner"`);

    console.log("Q no 17");

    //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
    // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

    // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

    // • Print a message to each of the two people still on your list, letting them know they’re still invited.

    // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
}
console.log(guestList);
console.log("I inform you that unfortunalety my new dinner table can not arrived in time, so i have space for only two guests. ");

for (let i = 0; i < guestList.length + 2; i++) {
    let removed = guestList.pop()
    console.log(removed);

    console.log("I am sorry to tell you that you can't invite to dinner because i have some problem so i apologize you.");

}
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i], "You are still invited.");
}
//at the end of your program.
for (let i = 0; i <= guestList.length; i++) {
    let removed1 = guestList.pop()
    console.log(removed1);
}

console.log(guestList);

console.log("Q no 18");
//Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log("These are the location where i want to visit one day inshallah");

let places:string[]=["Al Makkah Mukarma","Madina Munarwa","Istanbul","Toronto","Niagra falls","Belgium"]
// • Print your array in its original order.
console.log(places);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Array in alphabatical order");
let modifyingPlaces=places.concat().sort()
console.log(modifyingPlaces);

// • Show that your array is still in its original order by printing it.
console.log("original array");
console.log(places); 

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabatical order");
let reversePlaces=places.slice().sort().reverse()
console.log(reversePlaces);

// • Show that your array is still in its original order by printing it again.
console.log("original array");
console.log(places);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the original array");
places.reverse()
console.log(places);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Again reverse the original array");
places.reverse()
console.log(places);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort the original array");
places.sort()
console.log(places);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("By reverse the original array");
places.reverse()
console.log(places);

console.log("Q no 19");
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner
let afterGuestList = ["Ahmad", "Usama",]
console.log("you are inviting to my dinner", afterGuestList);



console.log("Q no 20");

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items

let countries:string[]=["Germany","Spain","Pakistan","Nepal","India","Canada",]
let countriesName = [...countries,]
console.log(countries);
console.log(countriesName);

console.log("Q no 21");
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type personalized= {name:string,education:string,age:number,gender:string}

let personObject:personalized={
    name:"Muhammad Ahmad",
    education:"Matric",
    age:16,
    gender:"Male"
} 
let personObject1 ={...personObject}
console.log(personObject1);
console.log(personObject);

console.log("Q no 22");

// //Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let cities:string[]=["Faisalabad","Lahore","Multan","Islamabad","Sialkot"]
//this is my index error, the lenght of cities array is 5 and start with the number 1, but the index in loop start with the number 0, 
for(let i=0; i<cities.length; i++){
    console.log(cities[i],"These are our cities");
}
console.log(cities.length);

console.log("Q no 23");
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let age:number=19;
let haslisense:boolean= false;
let hasmotorcycle:boolean=true;
console.log("Q no 1");
console.log("age > 18");
console.log(age>18);

console.log("Q no 2");
console.log("age < 18");
console.log(age<18);

console.log("Q no 3");

console.log("has lisence");
console.log(haslisense);

console.log("Q no 4");

console.log("has not lisence");
console.log(!haslisense);

console.log("Q no 5");

console.log("has motorbike");
console.log(hasmotorcycle);

console.log("Q no 6");

console.log("has not motorbike");
console.log(!hasmotorcycle);

console.log("Q no 7");

console.log("age >18 && haslisense, are allow to use motorbike");
console.log(age >18 && haslisense);

console.log("Q no 8");

console.log("if a person has a motorbike even he has no lisence then he can drive");
console.log(haslisense || hasmotorcycle);

console.log("Q no 9");

console.log("age < 18 or has no motorcycle");
console.log(age <18 || hasmotorcycle);

console.log("Q no 10");

console.log("age == 18");
console.log(age==18);

console.log("Q no 24");

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("No 1 part");

let country:string="Canada"
let countryName:string="Canada"
console.log("Here i try to conduct comparision between in strings");
console.log(countryName===country);

console.log("No 2 part");
countryName= "canada"
console.log(country.toLowerCase() ===countryName);

console.log("No 3 part");

let num1:number=7;
let num2:number=7;
console.log(num1===num2);
console.log(num1!==num2);

console.log(num1>num2);
console.log(num1<num2);

console.log(num1>=num2);
console.log(num1<=num2);


console.log("No 4 part");

console.log(num1>num2 || num1<num2);
console.log(num1>num2 && num1<num2);

let arr:string[]=["Samosa","Biryani","Chai"]
let arr1=arr.includes("Chai");
let arr2=arr.includes("Pepsi");
console.log(arr1);
console.log(arr2);

console.log("Q no 25");

//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
    
        // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
    let alien_color:string="green"
    if(alien_color==="green"){
        console.log("the player just earned 5 points.");   
    }

    console.log("Q no 26");
    //Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
if(alien_color==="green"){
    console.log("the player just earned 5 points for shooting the alien.");   
}
if(alien_color!=="green"){
    console.log("the player just earned 10 points.");   
}
   
console.log("Q no 27");
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if(alien_color==="green"){
    console.log("the player just earned 5 points."); }
if(alien_color==="yellow"){
    console.log("the player just earned 10 points."); }
if(alien_color==="red"){
    console.log("the player just earned 15 points."); }

console.log("Q no 28");
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
    
let personAge:number=19;
if(personAge<2){
    console.log("the person is a baby.");
}
else if(personAge>=2 && personAge <4){
    console.log("the person is a toddler.");
}
else if(personAge>=4 && personAge <13){
console.log("the person is a kid.");
}
else if(personAge>=13 && personAge <20){
    console.log("the person is a teenager.");
}
else if(personAge>=20 && personAge <65){
    console.log("the person is an adult.");
}
else if(personAge>=65){
    console.log("the person is an elder.");
}

console.log("Q no 29");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas

let fruits:string[]=["Apple","Mango","Banana"]
for(let i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}
    if(fruits.includes("Peach")){
    console.log("I really like Peach");
}
 if(fruits.includes("Grapes")){
    console.log("I really like Grapes");

}
 if(fruits.includes("Apple")){
    console.log("I really like Apple");
}
 if(fruits.includes("Mango")){
    console.log("I really like Mango");
 }
 if(fruits.includes("Banana")){
    console.log("I really like Banana");
}

console.log("Q no 30");
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames:string[]=["eric","harry","ibrahim","admin","usama"]
for(let user of usernames){
    if(user ==="admin"){
console.log("would you like to see a status report?");
    }
    else{
        console.log(`"Hello ${user}, thank you for logging in again."`);   
    }
}

console.log("Q no 31");
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
usernames.splice(0,usernames.length)
    
    if(usernames.length==0){
        console.log("print the message We need to find some users!");
    }
