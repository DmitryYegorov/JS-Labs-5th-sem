const app = document.getElementById("app");

class Busket {

    constructor(){
        this.count = 0;
        this.items = new Array();
    }

}

const busket = new Busket();
class Product {

    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.inBusket = false;
    }

    static storage = new Array();


    toString(){
        const btn = new Button("В корзину", {width: 80, height: 25}, "#ccffcc");
        return `
            <div class="item">
                <span>#${this.id}</span>
                <h4>${this.name}</h4>
                <img src="images/${this.image}.jpg" alt="${this.id} product">
                <span>${this.price}</span>
                ${btn.toString()}
            </div>
        `;
    }

    static add(obj){
        Product.storage.push(new Product(obj.id, obj.name, obj.price, obj.image));
    }

    static remove(id){
        Product.storage = this.storage.filter(item => {
            return item.id !== id;
        });
    }

    static printItems(){
        Product.storage.forEach((item, index) => {
            app.innerHTML += item;
        });
    }

    setName(id, name){
        Product.storage = Product.storage.map(item => {
            if (item.id === id){
                item.name = name;
            }
        });
    }

    setPrice(id, price){
        Product.storage = Product.storage.map(item => {
            if (item.id === id){
                item.price = price;
            }
        });
    }

    setImage(id, image){
        Product.storage = Product.storage.map(item => {
            if (item.id === id){
                item.image = image;
            }
        });
    }

}



Product.add({
    id: 1,
    name: "Notebook",
    price: 1500,
    image: "Notebook"
});
Product.add({
    id: 2,
    name: "iMac",
    price: 2500,
    image: "imac"
});
Product.add({
    id: 3,
    name: "iPhone",
    price: 2000,
    image: "iphone"
});
Product.add({
    id: 4,
    name: "BMW",
    price: 25000,
    image: "bmw"
});

Product.printItems();

for(let i = 0; i < document.getElementsByClassName("item").length; i++){
    if (i % 2 === 0){
        document.getElementsByClassName("item")[i].style.backgroundColor = "lightgray";
    }
}