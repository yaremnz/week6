function greet(name){
    return `hello ${name}!!`;
}
console.log(greet("class")) //pass in literal string

function fucntionalGreet(fnGetString){ // who to call 
    return `hello ${fnGetString()}!!!`; //call()
}
function kevin(){
    return `kevin`;
}
console.log(fucntionalGreet(kevin));