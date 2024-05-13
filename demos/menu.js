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



displayItem = i => console.log("\t", i.name, i.price)
displaySection = m => {
    console.log(m + ":"); 
    menu[m].forEach(displayItem)
};
Object.keys(menu).forEach( displaySection);
["apples", "banana", "cherry"].forEach((f, i, l)=>console.log(i, f, l.length));