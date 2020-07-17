//assignment 3.1 Feet To Mile
function feetToMile(feet){
    var mile = feet/5280;
    return mile=mile.toFixed(2);
}

var result = feetToMile(200);
console.log(result);

//assignment 3.2  Wood calculator
function woodCalculator(chair, table, bed){
        var chairCount = chair*1;
        var tableCount = table*3;
        var bedCount   = bed*5;
        var total = chairCount+tableCount+bedCount;
        return total;
}
var result = woodCalculator(2,3,7);
console.log("Total Quebec Feet =", result);

//assignment 3.3 Brick Calculator
function brickCalculator(numberOfFloor){
    if (numberOfFloor <=10 && numberOfFloor >=1){
        var brickNumber = numberOfFloor * 15000;
        return brickNumber;
    }else if (numberOfFloor > 10 && numberOfFloor <= 20){
        var brickNumber = ((numberOfFloor - 10) * 12000) + 150000;
        return brickNumber;
    }else if (numberOfFloor > 20){
        var brickNumber =((numberOfFloor - 20) * 10000) + 270000;
    return brickNumber;
    }else{
    return "Opps!!!!!";
    }
}
var result = brickCalculator(30);
console.log("Total bricks in the building of", result)

//assignment 3.4 tinyNames
function tinyFriend(names){
    var smallest = names[0].length;  
    for(var i=0; i<names.length; i++){
        var currentName = names[i].length;
       
        if(currentName<smallest){
            smallest=currentName;
           if(smallest=currentName){
               var getNames=names[i];    
           }
        }
    }

    return getNames;
}
var result = tinyFriend(['Rajib', 'Honse', 'sumaiyamun', 'Rani', 'Al-amin', 'Tipu']);
console.log(result);







