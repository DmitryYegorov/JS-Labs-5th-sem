function task1(){
    let comment=prompt("Напишите свой комментарий :)");
    let arr = new Array();

    if(comment.length<255){
        let pos1= comment.indexOf("кот", 0);
        if(pos1!=-1){
            arr=comment.split('');

            arr.splice(pos1,3,"***");
            arr=arr.join('');
            comment=arr;
        }
        let pos2=comment.indexOf("собак",0);
        if(pos2!=-1){
            arr=comment.split('');
            arr.splice(pos2,1,"С");
            arr=arr.join('');
            comment=arr;
        }
        let pos3=comment.indexOf("пес ",0);
        if(pos3!=-1){
            arr=comment.split('');
            arr.splice(pos3,0," многоуважаемый ");
            arr=arr.join('');
        }


    }
    else alert(" Ваш комментарий очень большой!");

    document.getElementById("name").innerHTML = arr;
}

function task3(){
    let week = {
        1:"понедельник",
        2:"вторник",
        3:"среда",
        4:"четверг",
        5:"пятница",
        6:"суббота",
        7:"воскресенье"
    };

    function getIndexForItemValue(arr, value){

        for (let i = 1; i <= 7; i++){
            if (arr[i] == value)
                return i;
            i++;
        }
        return -1;
    }

    let dayInt = +prompt("Номер дня недели:",1);
    
    alert(`Сегодня ${week[dayInt]}`);

    let nechDays = new Array();
    for (let i = 1; i < 7; i++){
        if ((i) % 2 != 0){
            nechDays.push(week[i]);
        }
    }
    
    alert(nechDays.length + "\n" + nechDays.map(function(item, index, arr){
        return item+": "+(getIndexForItemValue(week, item));
    }));
}

function task4(){
    /**
     * заголовок слайдера (его имя);
     * можно скрывать/показывать кнопки управления Вперед/Назад
     * и их размер (ширину);
     * задавать количество слайдов в ряду;
     * установить размер (высоту, ширину) слайдера с учетом кнопок
     */
    const Slider1 = {
        title: 'Slider1',
        hideBtnControls: true,
        sizeBtnControls: 40,
        countSlidesInRow: 10,
        margin: 5,
        getSize(){
            return {
                width: this.sizeBtnControls + 150,
                height: 200
            }
        }
    }

    // Ширина слайдов при отступе 5px между слайдами:
    let width1 = (Slider1.getSize().width - Slider1.sizeBtnControls
        - (Slider1.margin * (Slider1.countSlidesInRow - 1))) / Slider1.countSlidesInRow;
    console.log(width1);

    const Slider2 = Object.assign({}, Slider1);
    console.log(Slider1);
    Slider2.title = 'Slider2';
    console.log(Slider2);
}

function task5(){
    const Btns = {
        width: 100,
        height: 50,
        textColor: '#ffffff',
        bgColor: '#000000'
    };
    const Links = {
        fontSize: 14,
        fontFamily: 'Times New Roman',
        textColor: '#ff0000'
    };
    const Accent = {
        bgColor: '#ffff00'
    };

    let btn1 = Object.assign(Btns, Accent);
    console.log(btn1);
    let link1 = Object.assign(Links, Accent);
    console.log(link1);
}