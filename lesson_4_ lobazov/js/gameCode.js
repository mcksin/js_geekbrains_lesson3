
function questGame() {
    var questArr =[];
    var event, ok;

    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            do {
                ok = false;
                event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.b0, event);
                }
            } while (!ok);
            switch (event) {
                case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
            do {
                ok = false;
                event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.c0, event);
                }
            } while (!ok);
            switch (event) {
                case 1: // Второе действие
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case 2: // Второе действие
                    do {
                        ok = false;
                        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);

                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case -1: // Первое действие
            break;
        default:
            alert('Ошибка');
    }
    alert('Спасибо за игру');
    questHistory();
    function isAnswer(q, event) {


        if (isNaN(event) || !isFinite(event)) {
            alert('Вы ввели недопустимый символ');
            return false;
        }
        else if (event < 1 || event > q) {
            alert('Ваше число выходит из допустимого диапозона');
            return false;
        }
        questArr.push(event);
        return true;

    }
     function questHistory() {
       var evt = parseInt(prompt("введите номер окна от 1 до 3, что бы выйти любое другое значение"));
        var m ='';
        switch(evt){
            case 1:{
                if(questArr[0]==1){
                    m = works.a1;
                }else{
                    m = works.a2;
                }
                alert(works.a00+"\n Вы выбрали : "+m);
                break;
            }
            case 2:{
                if(questArr[1]==1){
                    m = works.b1;
                }else{
                    m = works.b2;
                }
                alert(works.b00+"\n Вы выбрали : "+m);
                break;
            }
            case 3:{
                if(questArr[2]==1){
                    m = works.c1;
                }else{
                    m = works.c2;
                }
                alert(works.c00+"\n Вы выбрали : "+m);
                break;
            }
        }
     }
}

//------------------------------------------
