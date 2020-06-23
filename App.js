
// Chapter # 1 : Q no 1

//alert("Hafiz Muhammad Kashif")


//  Q no 2

//alert("Error!please enter a valid Password")

//  Q no 3

//alert("Welcome to JS Land \n Happy Codding");

//  Q no 4

// alert("Welcome to JS Land.")
//alert("Happy Codding! prevent this page from creating additional dialogs.")

// Q no 5

//alert("Hello... I can run JS through my web browser's console");


 ////////Chapter # 2 : Q no 1 and 2

// var userName = 'Hafiz Muhammad Kashif';
// alert(userName);
//  console.log(userName);


  //Q no 3

  // var JS = "Hello world !";
  // alert(JS);

  //Q no 4

 // var JS  ;
// alert(" Hafiz Muhammad Kashif");
// alert("15 year old");
// alert(" Certified Mobile Application Development");

//Q no 5

// var JS;
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

//Q no 6

// var email = "kashifkh81@gmail.com";
// alert("My email address is  " + email);

 // Q No 7

// var book = "A Smart way to learn Javascript.";
// alert("I am trying to learn from the Book " + book);

//Q No 8
 // document.write("yah ! I can write  HTML content through Javascript");


 //Q No 9

 // var js= "--------Kashif---------"
 // alert(js);



//CHAPTER 3   Q no 1

// var age = "I am 22 year old"
// alert(age);




//Chapter # 5 to 9    : Q no 1 and 2

// var a = 3;
// var b = 5;
// document.write("3 + 5 = " + (a + b));
// document.write("<br>" + "3 - 5 = " + (a - b));

// document.write( "<br>" + "3 * 5 = " + (a * b));


// document.write("<br>" + "3 / 5 = " + (a / b));

// document.write("<br>" + "3 % 5 = " + (a % b));




//Q No 5

// var tableName = +prompt('which table you want to print?');
// var num = 0;
// var tableResult = tableName + ' x ' + num + ' = ' + tableName * num++
// document.write();
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>"); 
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");
// document.write(tableName + ' x ' + num + ' = ' + tableName * num++  + "<br>");

// Q No 6//

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     document.write(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     document.write("<br>" + message);
// } 
// cToF(60);
// fToC(45);


//Q No 7

//  var phyMarks = +prompt('your Physics marks');
// var chmMarks = +prompt('your Chemistry marks');
// var bioMarks = +prompt('your Biology marks');

// var totalMarks = 300;
// var totalObtainedMarks = phyMarks + chmMarks + bioMarks;
// var percentObt = totalObtainedMarks / totalMarks * 100;

// document.write(percentObt);

// if (percentObt >= 80) {
//     document.write('You got A+');
// }
// else if(percentObt >= 70){
//     document.write('You got A');
// }
// else if(percentObt >= 60){
//     document.write('You got B');
// }
// else if(percentObt >= 50){
//     document.write('You got C');
// }
// else if(percentObt >= 40){
//     document.write('You got D');
// }
// else if(percentObt >= 33){
//     document.write('You got E');
// }
// else if(percentObt < 33){
//     document.write('You are failed');
// }
// else{
//     document.write('something went wrong');
// }

// if (percentObt >= 80) {
//     document.write('You got A+');
// }
// else if(percentObt >= 70){
//     document.write('You got A');
// }

//Q No 8
//  var userInput = +prompt('type a number');
// if(userInput % 3 === 0){
//     document.write('it is divisible');
// }
// else{
//     document.write('It is not divisible');
// }

  //Q No 9  Even and odd

//   var userNumber = +prompt('please let us know a number');
// if (userNumber % 2 === 0){
//     document.write(' It is even');
// }
// else{
//     document.write('It is odd');
// }





//  Q No 11   Calculator

//  var num1 = +prompt('type first number'); 
// var operator = prompt('type required operator');
// var num2 = +prompt('type second number');
// var result;
// if(operator === '+'){
//     result = num1 + num2;
// }
// else if(operator === '-'){
//     result = num1 - num2;
// }
// else if(operator === '*'){
//     result = num1 * num2;
// }
// else if(operator === '/'){
//     result = num1 / num2;
// }
// else if(operator === '%'){
//     result = num1 % num2;
// }
// document.write(result);







// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }






//////  Chapter 21 to 30  Assignment 6 // 


///   Q  No 1 ///
// var person1 = prompt(" Enter your First name" );
// var person2 = prompt(" Enter your Last name");
// alert(person1 +  person2);

///  Q  No 2 ///
// var p = prompt("Enter your favourite mobile phone :");
//  document.write("My Favourite Phone is : " + p);
//   var x = p.length;
//   document.write( "<br> "  + "Length of String is " + x);


///  Q  No 3 ///
// var str = "Pakistani";
// document.write(str);
// var res = str.charAt("n");
// document.write("<br>" + "Index of 'n' is " + res);

/// Q  No 4 ///
//  var str = "Hello world";
// document.write(str);
// var res = str.charAt("9");
// document.write("<br>" + "Index of  is " + res);


///  Q No 7 ///

// var city = "Hyderabad";
// document.write("City:" + city);
// var city1 = city.replace("Hyder" , "Islam");
// document.write( "<br>" + "After replacement:" + city1);


// Q No 9///

// var integerString = "472"
// var num = Number(integerString);
// document.write(num);

// Q No 10//
// var str = "peanuts" ;
// var res = str.toUpperCase();
// document.write(res);


// Q No 1//

// var numA = 3.45214;
// document.write(numA);
// document.write(Math.round(numA));
// document.write(Math.ceil(numA));
// document.write(Math.floor(numA));


//Q No  

// integer1 = window.prompt("Enter the First Number :");
// integer2 = window.prompt("Enter the Second Number");

// if (integer1 > integer2) {
//     window.document.write(integer1 + " is larger.<br>");
// } else if (integer2 > integer1) {
//     window.document.write(integer2 + " is larger.<br>");
// } else {
//     window.document.write("Both the numbers are equal.<br>");
// }
// window.document.write("Number 1 : " + integer1 + ".<br>");
// window.document.write("Number 2 : " + integer2 + ".<br>");


///CHAPTER 31 t0 38//

//Q No 1/
// var add_minutes =  function (dt, minutes) {
//     return new Date(dt.getTime() + minutes*60000);
// }
// document.write(add_minutes(new Date(2020,6,23), 30).toString());

//Q No 2


// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// document.write(parseInt(currentAge))

//Q No 3

// var today = new Date();
// console.log(today.getDay());
// var todayDay = today.getDay();
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// document.write("Today is " + days[todayDay])

//Q No 4

//  var hypSqr = perSqr + baseSqr;
// Math.sqrt();

// function calculateHyp(perSqr, baseSqr){
//     var hypSqr = perSqr + baseSqr;
//     var hyp = Math.sqrt(hypSqr);
//     document.write(hyp);
// }


//Q No 5

// function sum(num1,num2){
//     return num1 + num2;
// }
// function calculate(num1,num2, myFunc){
//     return myFunc(num1, num2)
// }
// var answer;
// var opera = prompt('type operator');
// if(opera === '+'){
//     answer = calculate(2,5, sum);
// }
// document.write( answer);


//Q No 1//

// var curday = function(sp){
// today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //As January is 0.
// var yyyy = today.getFullYear();

// if(dd<10) dd='0'+dd;
// if(mm<10) mm='0'+mm;
// return (dd+sp+mm+sp+yyyy);
// };
// document.write(curday('/'));

//Q No 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));


///Q NO 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


/// Q No 13//

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));
