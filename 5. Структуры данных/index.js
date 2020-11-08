
let users = new Array(); // for 1st task

function task1(){

    let userName = prompt("Your nickname: ");

    if(!users.includes(userName, 0)){
        users.splice(0, 0, userName);
    }else{
        alert("This name has been busy!");
    }
    alert(users)
}

function task2(){
    console.log("ORDER BY NAME:");
    console.log(users.sort());
    console.log("ORDER BY NAME DESCENDING:");
    console.log(users.sort().reverse());
    let length = +prompt("Find by length:");
    users.forEach(function(item, index,array){
        if (item.length == length){
            console.log(item);
        }
    });
    let firstLetter = prompt("Find by first letter:");
    users.forEach(function(item,index,array){
        if (item[0].toUpperCase() == firstLetter.toUpperCase()){
            console.log(item);
        }
    });
}

let usersSet = new Set(users);

function task3(){
    let userName = prompt("Enter username:");
    if (usersSet.has(userName)){
        alert("This name has been existing!");
    }else{
        usersSet.add(userName);
    }


    let usersArrayForSort = new Array();
    usersSet.forEach(function(value, valueAgain, set){
        usersArrayForSort.push(value);
    });


    console.log("ORDER BY NAME:");
    console.log(usersArrayForSort.sort());
    console.log("ORDER BY NAME DESCENDING:");
    console.log(usersArrayForSort.sort().reverse());

    let length = +prompt("Find by length:");
    console.log(usersArrayForSort.filter((item)=>{
        return item.length == length;
    }));
    let firstLetter = prompt("Find by first letter:");
    usersArrayForSort.forEach(function(item, index, array){
        if (item[0].toUpperCase() == firstLetter.toUpperCase()){
            console.log(item);
        }
    });
}