function shahTable() {
   var tab =document.createElement('table');
   tab.id ='test';
   var steps = 10;
   document.body.appendChild(tab);
    var masWord = ['A','B','C','D','E','F','G','H']
   for(var m = 0;m<steps;m++){
       var tr =  document.createElement('tr');
       for(var i =0;i<steps;i++){
          var td = document.createElement('td');
            if(i!=0 && m!=0 && i!=steps-1 && m!=steps-1){
                if(i%2!=0 &&m%2==0 || i%2==0 && m%2!=0){

                    td.className = 'black' ;
                }

          }else if(i==0 || i==steps-1){
                td.className = 'word';
                if((i==0 || i ==steps-1)&& m!=0 && m!=steps-1){



                    var texNd = document.createTextNode(steps-m-1);
                    td.appendChild(texNd);
                }
            }else if(m==0 || m==steps-1){
                td.className = 'number';
                if((m==0 || m ==steps-1)&& i!=0 && i!=steps-1){
                    var texNd = document.createTextNode(masWord[i-1]);
                    td.appendChild(texNd);
                }
            }

          tr.appendChild(td);
       }
       tab.appendChild(tr);
   }
}