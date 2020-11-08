let users = new Map();

class User{
    constructor(userName) {
        this.userName = userName;
    }

    rating = parseInt(Math.random() * 100);

    toString(){
        return `Name: ${this.userName}
        Rating: ${this.rating}`;
    }
}

users.set(12345, new User("Dmitry"));
users.set(145, new User("Alex"));
users.set(75, new User("Pavel"));
users.set(10, new User("Mikita"));
users.set(15, new User("Ivan"));
users.set(24, new User("Inna"));
users.set(46, new User("Harry"));

let winnersRating = new Array();
for(let item of users.values()){
    winnersRating.push(item.rating);
}
winnersRating.sort().reverse();
for(let i = 0; i < 3; i++){
    let rating = winnersRating[i];
    for(let user of users.values()){

        if (user.rating == rating){
            console.log(`${i+1}: ${user}`);
            break;
        }
    }
}

