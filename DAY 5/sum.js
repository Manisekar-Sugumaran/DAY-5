var revilsum=()=>{
const sum = [10, 20, 30].reduce(add,0); 

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);
}
revilsum(); 