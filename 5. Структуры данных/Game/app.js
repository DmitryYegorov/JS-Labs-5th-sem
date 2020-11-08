class User{
    constructor(name, id) {
        this.userName = name;
        this.id = id;
    }
    userName = "";
    rating = 0;

    toString(){
        return `${this.userName} (${this.id}): ${this.rating}`;
    }
}

const users = new Set();

function RegisterUser(){
    let userName = prompt("Enter your nickname:");
    if (IsUserNameExist(userName)){
        alert("This name has been existing!");
    }else if(!IsUserNameExist(userName)){
        users.add(new User(userName, parseInt(Math.random() * 10000)));
        document.getElementById("UsersList").innerHTML = "";
        alert(`Welcome, ${userName}! You can to start.`);
    }
}

function IsUserNameExist(userName){
    let result = false;
    users.forEach(function(value){
        if (value.userName == userName){
            result = true;
        }
    });
    return result;
}

let count = 1;
function StartGame(){

    document.getElementById("winners").innerHTML = "";
    if (users.size == 0)
        return;
    if (count > 10){
        document.getElementById("UsersList").innerHTML = "";
        count = 1;
    }
    document.getElementById("UsersList").innerHTML += `Game #${count}`;
    users.forEach(value=>{
        value.rating = parseInt(Math.random() * 100);
        let usersList = document.getElementById("UsersList");
        usersList.innerHTML += `<li><span style="color: #ff110f; font-weight: bold;">${value.userName}</span> (${value.id}): ${value.rating}</li>`;
    });
    count++;
    let winnersRating = new Array();
    for(let item of users.values()){
        winnersRating.push(item.rating);
    }
    winnersRating.sort().reverse();
    for(let i = 0; i < 3; i++){
        let rating = winnersRating[i];
        for(let user of users.values()){

            if (user.rating == rating){
                document.getElementById("winners").innerHTML += `${i+1}: ${user}<br>`;
                break;
            }
        }
    }
}