///pure Function same input same output does not modiying on browser

function Add(a,b){
    return console.log(a+b);
    
}
Add(5,4);
Add(5,4);

///Impure Function same input but diffrent output 
let total = 0;
function Impure(a){
   return console.log(total+=a);
   
}

Impure(3);
Impure(3);

