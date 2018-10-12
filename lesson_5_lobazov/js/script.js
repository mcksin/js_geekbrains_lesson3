function shahTable() {
    // со
    //шаги
   var steps = 10;
    // массив букв
    var masWord = ['A','B','C','D','E','F','G','H'];
    //массив черных фигур
    var black =['&#9823;','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
    // массив белых фигур
    var white =['&#9817;','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'];
    var texNd ='';

    // создание таблицы и привязка к  body
   var tab =document.createElement('table');
   document.body.appendChild(tab);

   for(var m = 0;m<steps;m++){
       // создание  tr
       var tr =  document.createElement('tr');

       for(var i =0;i<steps;i++){
           // создание td
          var td = document.createElement('td');

            if(i!=0 && m!=0 && i!=steps-1 && m!=steps-1){
                // расставляет фигуры
                switch(m){
                    case 1:{
                        td.innerHTML =black[i];
                        break;
                    }
                    case 2:{
                        td.innerHTML =black[0];
                        break;
                    }
                    case steps-2:{
                        td.innerHTML =white[i];
                        break;
                    }
                    case steps-3:{
                        td.innerHTML = white[0];
                        break;
                    }
                }
                // раскраска поля в шахматном порядке
                if(i%2!=0 &&m%2==0 || i%2==0 && m%2!=0){

                    td.className = 'black' ;
                }

            }else if(i==0 || i==steps-1){
                // добавление нумерации ячеек
                td.className = 'word';
                if((i==0 || i ==steps-1)&& m!=0 && m!=steps-1){



                    texNd = document.createTextNode(steps-m-1);
                    td.appendChild(texNd);
                }
            }else if(m==0 || m==steps-1){
                // добавление буквенны обозначений ячеек
                td.className = 'number';
                if((m==0 || m ==steps-1)&& i!=0 && i!=steps-1){
                    texNd = document.createTextNode(masWord[i-1]);
                    td.appendChild(texNd);
                }
            }

          tr.appendChild(td);
       }
       tab.appendChild(tr);
   }
}