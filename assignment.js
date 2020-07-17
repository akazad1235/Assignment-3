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


//assignment 3.4 tinyNames
function tinyNames(names){
    
    var smallest = names[0].length  
    for(var i=0; i<names.length; i++){
        var currentName = names[i].length
        //var max= Math.min(current)
       
        if(currentName<smallest){
            smallest=currentName
           if(smallest=currentName){
               var getNems=names[i]      
           }
        }
    }

    return getNems
}
var result = tinyNames(['Rajib', 'Honse', 'sumaiyamun', 'Rani', 'Al-amin', 'Tipu'])
console.log(result)







