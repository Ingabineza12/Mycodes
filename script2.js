/************************************************
** CODING CHALLENGE 2 *****/


var teamJohn;
var teamMike;

teamJohn = (89 + 120 + 103) / 3;
teamMike = (116 + 94 + 123) / 3;

console.log('average score of team john is' + ' ' + teamJohn );
console.log('average score of team Mike is' + ' ' + teamMike );

if (teamJohn > teamMike) {
    
    console.log( 'John\'s team has higher average ' + ' ' + 'which is' + ' ' + teamJohn);
}
else if (teamJohn === teamMike){
    console.log('the two teams have the same average');
}

else {
    console.log( 'Mike\'s team has higher average ' + ' ' + 'which is' + ' ' + teamMike);
}

var teamMary;
teamMary = (97 + 134 + 105) / 3;
console.log( 'average score of team Mary is' + ' ' + teamMary);

if (teamJohn > teamMike && teamJohn > teamMary ) {
    
    console.log( 'John\'s team has higher average ' + ' ' + 'which is' + ' ' + teamJohn);
}
else if (teamJohn === teamMike === teamMary) {
    console.log('the three teams have the same average');
}
 
else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log( 'Mike\'s team has higher average ' + ' ' + 'which is' + ' ' + teamMike);
}

else {
    console.log( 'Mary\'s team has higher average ' + ' ' + 'which is' + ' ' + teamMary);
}


