/******************************************
*******CODING CHALLENGE 1 */ 

var weightJohn, weightMark, MassJohn, MassMark;

heightJohn = 1.95;
MassJohn = 92;

heightMark = 1.69;
MassMark = 78;

var johnMBIs = MassJohn / (heightJohn * heightJohn);
console.log(johnMBIs);

var markMBIs = MassMark / ( heightMark * heightMark);
console.log(markMBIs);

var higherMBIs = markMBIs > johnMBIs ;
console.log(higherMBIs);

console.log('is John\'s MBIs higher than Mark\'s MBIs ? ' +' ' + higherMBIs );
