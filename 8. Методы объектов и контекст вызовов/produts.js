function shoes(id, color, price, size, type){
    this.id = id;
    this.color = color;
    this.price = price;
    this.size = size;

    this.type = type;

    Object.defineProperty(this, "sale", {
        set (value){
            this.price  = this.price - value/100 * this.price;
        }
    });
}

const products = {
    shoesList: {
        sneakers: [
            new shoes("sn1", "white", 120, 40, "sneakers"),
            new shoes("sn2", "black", 115, 42, "sneakers")
        ],
        bots: [
            new shoes("b1", "white", 90, 39, "bots"),
            new shoes("b2", "black", 110, 44, "bots")
        ],
        sandals: [
            new shoes("san1", "yellow", 95, 43, "sandals"),
            new shoes("san2", "green", 70, 39, "sandals")
        ]
    }
}
products[Symbol.iterator] = function(){
    const array = [...this.shoesList.bots, ...this.shoesList.sandals, ...this.shoesList.sneakers];
    return {
        index: 0,
        next(){
            if (this.index < array.length) {
                return {done: false, value: array[this.index++]};
            }else{
                return {done: true};
            }
        }
    }
}

Object.defineProperty(shoes, "id", {
    writable: false,
    configurable: false
});
Object.defineProperty(shoes, "size", {
    writable: false
});
Object.defineProperty(shoes, "color", {
    writable: false
});

products["getRange"] = function(property, from, to){
    const array = new Array();
    for(let item of products){
        if (item[property] >= from && item[property] <= to){
            array.push(item);
        }
    }
    return array;
};

products["getShoesBySize"] = function (size){
    const array = new Array();
    for(let item of products){
        if (item.size === size) array.push(item);
    }
    return array;
};

products["getShoesByColor"] = function (color){
    const array = new Array();
    for(let item of products){
        if (item.color === color) array.push(item);
    }
    return array;
};

products["setProduct"] = function (category, type, product){
    products[category][type].push(product);
    return product;
}