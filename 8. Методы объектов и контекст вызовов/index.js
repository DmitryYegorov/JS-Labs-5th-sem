
console.log(products.getRange("size", 39, 42));
console.log(products.getShoesByColor("yellow"));
console.log(products.getShoesBySize(44));

console.log("*********************************");

for(let item of products){
    if (item.type === "bots")
        console.log(item);
}
console.log("************************************");
products.setProduct("shoesList", "bots", new shoes("bot3", "black", 300, 43, "bots"));

for(let item of products){
    if (item.type === "bots")
        console.log(item);
}
console.log("**************************************");
console.log(products.shoesList.bots[0].price);
products.shoesList.bots[0].sale = 20;
console.log(products.shoesList.bots[0].price);