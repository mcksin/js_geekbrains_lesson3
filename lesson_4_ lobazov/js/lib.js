
function createObjNum(numb){
    var numer =  parseInt(numb);
    var numObj = {};
    if(isNaN(numer) || numer>999 ||numer<0){ // проверка соответсивя условиям
        return console.log( numObj);
    }
    var numbArray = numb.split(""); // создвание массива из параметров
    //присваиваем значение из массива свойствам объекта
    numObj.units = numbArray[0];
    numObj.tens = numbArray[1];
    numObj.hundreds = numbArray[2];
    numObj.status = true;
    console.log("object" + numObj);
    return numObj;
};







function milEngine(mas,result = 0 ,iter = 0) {

// проверка на первый запуск
    if(iter == 0 && result == 0){
        alert("");
        result = prompt(mas[iter].text+"\n\n"+mas[iter].v1+"\n"+mas[iter].v2+"\n"+mas[iter].v3+"\n"+mas[iter].v4+"\n\n Вопрос стоимостью :"+mas[iter].price+"\n");
        // после правильного ответа функция вызывает сама себя
        milEngine(mas,result,iter);
    }
    // проверка на корректность введеных данных
    else if(!result){
        alert(" Hеверный ответ. Игра окончена\n Неверно введен параметр");
    }
    else {
        // проверка правильности ответа , если ответ верен и если остались вопросы то :
        if(mas[iter].ok == result &&iter+1<mas.length){
            // переходим к следующему вопросу
            iter++;
            //выводим окно ввода
            result = prompt(mas[iter].text+"\n\n"+mas[iter].v1+"\n"+mas[iter].v2+"\n"+mas[iter].v3+"\n"+mas[iter].v4+"\n\n Вопрос стоимостью :"+mas[iter].price+"\n");
            // вызываем повторно функцию
            milEngine(mas,result,iter);
        }
        else if(mas[iter].ok != result || !result){
            alert(" Hеверный ответ. Игра окончена\n Правильных ответов:"+iter+"\n Ваш выигрыш: "+mas[iter-1].price);

        }
        //
        else {
            alert("Вы победили!!\n Ваш выигрыш: "+mas[iter].price)
        }
    }


}


