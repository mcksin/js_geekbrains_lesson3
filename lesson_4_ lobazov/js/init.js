// Запуск функций с параметрами
function lessOne(){
    var res =  createObjNum(prompt("введите число от 0 до 999"));
    var str ="";
    for(var i in res){ //перевод в строку имя свойства и значение
        str+=i+":"+res[i]+"\n";

    }
    alert(str);
}

function million() {

    //  создаем объекты с вопросами

    var obj1 = {
        id: '1',
        text: 'Как расшифровывается HTML?',
        v1: '1. HyperThread Mask Language',
        v2: '2. HyperThread Markup Language',
        v3: '3. HyperText Mask Language',
        v4: '4. HyperText Markup Language',
        ok: 4,
        price: 1000
    }

    var obj2 = {
        id: '2',
        text: 'Какая студия подарила нам Dark souls?',
        v1: '1. Bethesda',
        v2: '2. BioWare',
        v3: '3. FromSoftware',
        v4: '4. CD Projekt RED',
        ok: 3,
        price: 2500
    }

    var obj3 = {
        id: '3',
        text: 'Какого издателя называют убийцей студий?',
        v1: '1. Sony',
        v2: '2. EA',
        v3: '3. Ubisoft',
        v4: '4. Capcom',
        ok: 2,
        price: 5000
    }

    var obj4 = {
        id: '4',
        text: 'Какому персонажу из Steins;Gatе пренадлежит фраза - el. psy. congroo. ?',
        v1: '1. Окабэ Ринтаро',
        v2: '2. Крафт Лоуренс',
        v3: '3. Курису Макисе',
        v4: '4. Итару Хасида',
        ok: 1,
        price: 10000
    }

    var obj5 = {
        id: '5',
        text: 'В какой книге существовал великий психо-историк Гэри Селдон?',
        v1: '1. Цикл Основание. Айзек Азимов',
        v2: '2. Вокзал потерянных снов. Чайна Мьевиль ',
        v3: '3. Цикл Пространство Откровения. Аластер Рейнольдс',
        v4: '4. Цикл Песни Гипериона. Дэн Симмонс',
        ok: 1,
        price: 50000
    }
        // добавляем объекты в массив
    var mas = [obj1, obj2, obj3, obj4,obj5];


    milEngine(mas);
}