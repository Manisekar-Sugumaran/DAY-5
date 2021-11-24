var revilduplicate=function(){
let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]
let unique = [];  
animals.forEach((item) => {
        if(!unique.includes(item)){
            unique.push(item);
        }
});
console.log(unique);
};
revilduplicate();