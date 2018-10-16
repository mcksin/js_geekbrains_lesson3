var arrImage = document.getElementsByClassName("smile");
var basketArr =[];
for (var i = 0;i<arrImage.length;i++){
    arrImage[i].addEventListener("click",mini);
}

function mini(){
   var bgImg = document.getElementById('big');
   bgImg.src = this.src.replace('smail','big');
   bgImg.onerror = function () {alert('Невозможно загрузить изображение')};
}


/**---------------------------------------------------------------------------*/
/* решено сделать через json что бы не привязываться к верстке,
так любое изменение в ней сломает корзину если двигаться по дереву  parentNode ,childNode и т.п,
 обычно все равно все идет с бэка и генерится со стороны php, продублировать инфу в btn не проблема,  есть идея с 2мя массивами и*/





function addBasket(evt) {

    console.log(evt.getAttribute("datafull"));
  addStorage(JSON.parse(evt.getAttribute("datafull")));


}
function uniqProd(dataProduct) {
    // проверка , уникален ли элемент в масиве
    for(var i =0;i<basketArr.length;i++){
      if(dataProduct.id==basketArr[i].id){

          basketArr[i].count++;
          console.log(basketArr[i]);
        return  false;
      }
    }
   return true;
}
function addStorage(product){
    // массив
    if(basketArr.length==0 || uniqProd(product)){
        product.count  = 1;
        console.log(product);
        basketArr.push(product);

    }
    renderBasket();

}
function  renderBasket(){

    var sum =0 ;
    var  basketBlock = document.getElementById('basket-block');

    if(basketBlock){
       basketBlock.remove();

    }

    var basket =  document.getElementById('basket');
    basketBlock =document.createElement('div');
    basketBlock.id ='basket-block';
    basket.appendChild(basketBlock);
    for(var i=0;i<basketArr.length;i++){

        var baskProd = document.createElement('div');
        var prodTitle = document.createElement('h3');
        var prodPrice = document.createElement('span');

        var count = document.createElement('div');
        var sumBlock =  document.createElement('span');
        sum +=  parseInt(basketArr[i].price)*parseInt(basketArr[i].count);

        prodTitle.innerHTML = basketArr[i].title;
        prodPrice.innerHTML =basketArr[i].price;
        count.innerHTML = basketArr[i].count;
        baskProd.appendChild(prodTitle);
        baskProd.appendChild(prodPrice);
        baskProd.appendChild(count);
        baskProd.appendChild(sumBlock);
        basketBlock.appendChild(baskProd);

    }
    sumBlock.innerHTML ='';
    sumBlock.innerHTML ="Сумма : " +sum;
    basketBlock.appendChild(sumBlock);
}

var slideNumber = 0;

var slideArr = ['smail/logo.png','smail/logo2.png','smail/logo11.jpg'];
var slideImage = document.getElementById('slide-image');
console.log(slideArr[slideNumber]);
console.log( slideImage.src);
 slideImage.src  = slideArr[slideNumber];
function next(){
    slideNumber++;
    console.log(slideNumber);
    if(slideNumber>slideArr.length-1){
        slideNumber=0;
    }
    slideImage.src  = slideArr[slideNumber];

}
function prev(){

    slideNumber--;
    console.log(slideNumber);
    if(slideNumber<0){
        slideNumber=slideArr.length-1;
    }
    slideImage.src  = slideArr[slideNumber];
}