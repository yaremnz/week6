data = [
    {
        name: "class"
    },
    {
        name: "kevin"
    }
];
// function greet(text){
//     return(`hello ${text}!!!`)
// }
// for(item of data){
//     console.log(greet(item.name))
// }
// function print(item){
//     console.log(greet(item.name))
// }
data.forEach((item) => { console.log(`hello ${item.name}!!!`) });

data.forEach((item) => console.log(`hello ${item.name}!!!`));
//for each will call out function LATER

[12,34,56].forEach( n => console.log(n) );

numbers = [12,34,56];
// pn = n => console.log(n) //shorthand
// function pn(n){
//     console.log(n); //longhand
// }
// number.forEach(pn);
numbers.forEach(n => console.log(n));


menu = {
    breakfast : [
        { name:"pancakes", price:3.99},
        { name:"ham", price:4.99},
    ],
    lunch : [
        { name:"sandwich", price: 6.99},
        { name:"soup", price:2.99}
    ]
}
console.log("PRICE OF SOUP: ", menu["lunch"][1].price)
// keys = Object.keys(menu)
// for(m of keys){
//     console.log(m)
//     for(item of menu[m]){
//         console.log(item.name, item.price);
//     }
// }

// Object.keys(menu).forEach(m=>menu[m].forEach(i=> console.log(i.name, i.price)))

// Object.keys(menu).forEach( m => {
//     console.log(m + ":");
//     menu[m].forEach(i=>{
//         console.log("\t", i.name, i.price);
//         });
// });

displayItem = i => console.log("\t", i.name, i.price)
displaySection = m => {
    console.log(m + ":"); 
    menu[m].forEach(displayItem)
};
Object.keys(menu).forEach( displaySection);
["apples", "banana", "cherry"].forEach((f, i, l)=>console.log(i, f, l.length));