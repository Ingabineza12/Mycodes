/*****************************************************
    ************ CODING CHALLENGE 4*********/ 

var John = {
    
    firstName: 'John',
    mass: 92,
    height:1.92,
    JohnBMIcalc: function(mass,height){
        this.BMIJohn = this.mass / (this.height * this.height);
        return this.BMIJohn;
    }
};
John.JohnBMIcalc();
console.log(John);

var Mark = {
    
    firstName: 'Mark',
    mass: 78,
    height:1.69,
    MarkBMIcalc: function(mass,height){
        this.BMIMark = this.mass / (this.height * this.height);
        return this.BMIMark;
}
};
Mark.MarkBMIcalc();
console.log(Mark);

if(John.BMIJohn > Mark.BMIMark){
    console.log(John.firstName + ' '+ 'has' + ' ' +John.BMIJohn + ' ' + 'which is higher BMI than Mark\'s');
}

else if(Mark.BMIMark > John.BMIJohn){
    console.log(Mark.firstName+ ' ' + 'has' +' ' + Mark.BMIMark + ' ' + 'which is higher BMI than John\'s');
}

else{
    console.log('Both' + ' ' + John.firstName + ' ' + 'and'+ ' ' + Mark.firstName + ' ' + 'has the same BMI ');
}


