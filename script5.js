/***************************************************
************** CODE CHALLENGE 5*/

var John = {
    
    fullName: 'John Scoot',
    bills: [124,48,268,180,42],
    tipcalc : function (){
        
    this.tiparray  = [];
    this.finalValues = [];

 for (i=0; i<this.bills.length;i++){
        var percentage;
       var bill = this.bills[i];
       
    if ( bill < 50){
        percentage = .2;
    }
    
    else if (bill >= 50 && bill <= 200 ){
       percentage = .15;
    }
    else {
        percentage = .1;
    }
        this.tiparray[i] =  bill *  percentage ;
        this.finalValues[i] = bill + bill *  percentage; 
        
      }
},
    totalTipsJohn : function(){
        for (var i=0; i<this.tiparray.length;i++){
            this.tipstotalJohn;
            this.averageJohn;
            
          this.tipstotalJohn = this.tiparray[0] + this.tiparray[1] + this.tiparray[2] + this.tiparray[3] + this.tiparray[4];
          this.averageJohn = this.tipstotalJohn / 5;
}
    }
}
John.tipcalc();
John.totalTipsJohn();       
console.log(John);



var Mark = {
    fullName : 'Mark Ishimwe',
    billsArray : [77,375,110,45],
    calcTip : function(){
        
      this. TipsArray = [];
      this. totalPay = []; 
        
        for (i=0;i<this.billsArray.length;i++){
            
            var percentage;
            var bill = this.billsArray[i];
            
            if( bill < 100){
                percentage = .2;
            }
            
            else if(bill>=100 && bill<=300){
                percentage = .1;
            }
            else{
                percentage = .25;
            }
    this.TipsArray[i] = bill * percentage;
    this.totalPay[i] = bill + bill * percentage ;
     }
    },
    
    totalTipsMark : function(){
        for (var i=0; i<this.TipsArray.length;i++){
            this.tipstotalMark;
            this.averageMark;
          this.tipstotalMark = this.TipsArray[0] + this.TipsArray[1] + this.TipsArray[2] + this.TipsArray[3];
          this.averageMark = this.tipstotalMark / 4;
        }
    }
}

Mark.calcTip();
Mark.totalTipsMark();
console.log(Mark);


        
    
        if (this.averageJohn > this.averageMark ){
            console.log('John has the highest average which is' + ' ' + this.averageJohn);
        }
        else {
            console.log('Mark has the highest average which is' + ' ' + this.averageMark);
        }
        
    