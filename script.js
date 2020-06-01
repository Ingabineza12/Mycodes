/*jslint devel: true
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job, isMarried;
console.log(job);

job = 'Teacher';
console.log(job);



/***********************************
variable mutation and type coercion */     

var firstName = 'Mark';
var age = 39;  

// type coercion

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + ' .  Is he married? ' + isMarried);

// variable mutation: change value of a variable
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + ' .  Is he married ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);




/******************************
Basic operator***********/


var now, yearJohn, yearMark;

//math operator

now = 2018;
ageJohn = 28;
ageMark = 33;


yearJohn = now - ageJohn; 
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now * 2);
console.log(now / 10);
console.log(now + 2);

//logic operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator we use one operand

console.log(typeof yearJohn);
console.log(typeof johnOlder);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);



/************************************
******  operator precedence   ***/


var now = 2020;
var yearDeborah = 1998;
var fullAge = 18;

//multiple operators

var isFullAge = now - yearDeborah >= fullAge;
console.log(isFullAge);

//grouping

var ageDeborah = now - yearDeborah;
var ageBen = 35;
var average = (ageDeborah + ageBen) / 2

console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6// 32 - 6// 26

console.log(x , y);

// MORE OPERATORS

x *= 2;
console.log(x);

x  += 20;
console.log(x);

x++;
console.log(x);







/******************************************************
***********IF/ELSE STATEMENT****/



var firstName = "Debby";
var civilstatus = "single but will hopefully marry soon :)";

if (civilstatus === "married"){
    
    console.log( firstName + 'is married!' );
}

else{
    console.log(firstName + ' is ' + civilstatus)
};


var ismarried = false;
if (ismarried){
    
    console.log( firstName + 'is married!' );
}

else{
    console.log(firstName + ' is ' + civilstatus)
};



/* from the above challenge */

var weightJohn, weightMark, MassJohn, MassMark;

heightJohn = 1.95;
MassJohn = 92;

heightMark = 1.69;
MassMark = 78;

var johnMBIs = MassJohn / (heightJohn * heightJohn);

var markMBIs = MassMark / ( heightMark * heightMark);

if (johnMBIs > markMBIs){
    
    console.log('John\'s BMIs is higher than Mark\'s')
}
else{
    
     console.log('Mark\'s BMIs is higher than John\'s')
}



/*******************************
********** BOOLEAN LOGIC******/

var middleName = "Ingabire";
var age = 22;

if ( age < 13){
    console.log( middleName + ' ' + 'is a girl');
}
else if ( age >= 13 && age <= 19){
    console.log(middleName + ' ' + 'is a teenager');
}
else if (age >19 && age <= 25){
    console.log(middleName + ' ' + 'is a young woman');
}
else{
    console.log(middleName + ' ' + 'is a woman');
}



/***************************************
********** THE TERNARY OPERATOR AND SWITCH OPERATOR**/


var lastName = "smith";
var age = 20;

 //the ternary operator

age >= 18 ? console.log(lastName + ' ' + 'drinks beer.') : console.log(lastName + ' ' + 'drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);



          /* or 
if(age >=18){
    var drink = 'beer';
}
else{
    var drink = 'juice';
}

*/


/****** SWITCH STATEMENT**********/

var job = "teacher";
switch (job) {
        
    case 'teacher':
        console.log(lastName + ' ' + 'teaches kids how to code');
        break;
        
    case 'driver':
        console.log(lastName + ' ' + 'drives kids how to school');
        break;
        
    case 'designer':
         console.log(lastName + ' ' + 'design beautiful websites');
        break;
    default:
        console.log(lastName + ' ' + 'does something else');
        
}

var middleName = " Lester";
age = 7;
switch (true) {
        
    case age < 13:
        console.log(middleName + ' ' + 'is a girl');
        break;
    case age >= 13 && age <= 19:
        console.log(middleName + ' ' + 'is a teenager');
        break;
    case age > 19 && age <= 25:
        console.log(middleName + ' ' + 'is a young woman');
        break;
    default:
        console.log(middleName + ' ' + 'is a woman');
}


/***************************************************
********* truthy and falsy values and equality operators******/


//falsy values: undefined,null,0,'', NaN. are considered false when evaluated in if/else statement condition

//truthy values are considered true when evaluated in if/else statement condition(not falsy value)
 var height;
height = NaN;

if (height || height === 0) {
    
    console.log('variable is defined');
}
else{
    console.log('variable is not defined');
}




/******************************************************
******* FUNCTIONS**********/



function calculateAge (birthYear) {
    
    return 2020 - birthYear;
}
var ageJohn = calculateAge (1994);
console.log( 'John is' + ' ' + ageJohn + ' ' + 'years old');

var ageMike = calculateAge (1954);
console.log( 'Mike is' + ' ' + ageMike + ' ' + 'years old');

var ageJane = calculateAge (1977);
console.log( 'Jane is' + ' ' + ageJane + ' ' + 'years old');




function yearUntilRetirement( year, firstName){
    
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if ( retirement > 0){
    console.log ( firstName + ' ' + 'retires in' + ' ' + retirement + ' ' + ' years')
    }
    
    else {
      console.log ( firstName + ' ' + 'is already retired')  
    }
}

yearUntilRetirement ( 1990, 'John');
yearUntilRetirement ( 1935, 'Jack');
yearUntilRetirement ( 1998, 'Jeff');



/*********************************************************************
                FUNCTION STATEMENT AND EXPRESSIONS
       *****************************/

//FUNCTION DECLARATION

//function whatDoYouDo ( job, firstname){

//}
    
// FUNCTION EXPRESSION always returns a value while FUNCTION STATEMENT doesn't return a direct vslue.

var whatDoYouDo = function ( job, firstName){
    switch(job){
            
        case 'Teacher': 
            return firstName + ' ' + ' teaches kids how to code.';
            
        case 'Driver': 
            return firstName + ' ' + ' drives kids to school.';
            
        case 'Designer': 
            return firstName + ' ' + ' design beautiful websites.';
        default :
            return firstName + ' ' + ' does something else. ';
            
    }
}
console.log(whatDoYouDo( 'Teacher', 'John'));
console.log(whatDoYouDo( 'Driver', 'Jake'));
console.log(whatDoYouDo( 'developer', 'Jane'));



/*************************************************
********* ARRAYS  ******************
        **********************/

//Initialize new array

var names = [ 'John', 'Jake', 'Morry'];
var years = [1990, 1890, 1999];

console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data

names[1] = 'Ben';
names[names.length] = 'Mary'// last element in the array
console.log( names)

years.push(2000);// last element in the array
console.log(years);

// Different data types

var John = [ 'John', 'Smith', 1998, 'Teacher', 'Designer',  false];

John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.shift();
console.log(John);

console.log(John.indexOf('Teacher'));
console.log(John.indexOf(456));

var isDesigner = John.indexOf('Designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);




/****************************************************
    ************ OBJECTS AND PROPERTIES********/

//object literal
var John = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1998,
    family : ['Jake','Marry','luke','Mika','Emily'],
    job : 'Teacher',
    isMarried : false
};

console.log(John.firstName);
console.log(John['lastName']);

var x = 'birthYear';
console.log(John[x]);

//mutation
//1
John.job = 'Developer';
John.isMarried = true;
console.log(John);

//2
John['job'] = 'Doctor';
John['birthYear'] = 1990;

console.log(John);

//another way of initializing an object(object new syntax)

var Jane = new Object();
Jane.firstName = 'Jane';
Jane.birthYear = 1996;
Jane.job = 'cleaner';
Jane['lastName'] = 'Scott';
console.log(Jane);



/**************************************************
    ************ OBJECTS AND METHODS********/

var John = {
    firstName: 'John',
    lastName : 'Smith',
    birthYear : 1998,
    family : ['Jake','Marry','luke','Mika','Emily'],
    job : 'Teacher',
    isMarried : false,
    calcAge: function(birthYear){
        this.age= 2020-this.birthYear;
    }
};
John.calcAge();
console.log(John);



/******************************************************
************ LOOPS AND ITERATION***********************/

// FOR LOOP

for (var i=1; i<= 20 ; i+=2){
    
    console.log(i);
}

var John = [ 'John', 'Smith', 1998, 'Teacher', 'Designer',  false];
console.log(John[0]);
console.log(John[1]);

for(var i=0; i<John.length;i++){
    console.log(John[i]);
}

// WHILE LOOP
var i=0
while( i<John.length){
    console.log(John[i]);
    i++;
}


// continue and break statements

var John = [ 'John', 'Smith', 1998, 'Teacher', 'Designer',  false];
for(var i=0; i<John.length;i++){
    if (typeof John[i] !== 'string') continue;
    console.log(John[i]);
}
for(var i=0; i<John.length;i++){
    if (typeof John[i] !== 'string') break;
    console.log(John[i]);
}

//looping backward
for (var i=John.length-1;i>=0;i--){
    console.log(John[i]);
}



        
        
        
        
         
        