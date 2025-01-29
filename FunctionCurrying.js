function Add(a){
    return function(b){
        return function(c){
            return console.log(a+b+c);
        }
    }
}
let c= Add((5))
console.log(c(2)(6))