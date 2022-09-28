// javascript datatypes
function ShowValue()//function definition
{   var liValues='';
    for (var i=0;i<5;i++)

    {//console.log(i);
    liValues=liValues+'<li>'+i+'</li>';
    
    }
    //console.log('Final i value : '+i);
    document.getElementById('values').innerHTML=liValues;
}

console.log(ShowValue());

