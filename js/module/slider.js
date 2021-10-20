var mySlider = {
 
 
 clickSlider : () =>{
    
 const items = document.querySelectorAll('img');
 const nbSlide = items.length;
 var suivant = document.getElementById('suivant');
 var precedent = document.getElementById('precedent');
  let count = 0;
   /* function slideSuivante() {
     
       items[count].classList.remove('myImage');

       if (count < nbSlide -1) {
           count++;
       } else{
           count = 0;
       }
       items[count].classList.add('myImage');
   }
   suivant.addEvenListener('click', slideSuivante());*/
   document.getElementById('suivant').addEventListener('click' , function () {
    items[count].classList.remove('myImage');

    if (count < nbSlide -1) {
        count++;
    } else{
        count = 0;
    }
    items[count].classList.add('myImage');
   });

   document.getElementById('precedent').addEventListener('click' , function () {
    items[count].classList.remove('myImage');
    if (count > 0) {
       count--;
   } else{
       count = nbSlide - 1;
   }
   items[count].classList.add('myImage');
   });

   
   
   /*function slidePrecedente() {
     items[count].classList.remove('myImage');
     if (count > 0) {
        count--;
    } else{
        count = nbSlide - 1;
    }
    items[count].classList.add('myImage');
   }
   precedent.addEvenListener('click', slidePrecedente()); */

   function keyPress(e) {
       if (e.keyCode === 37) {
        items[count].classList.remove('myImage');
        if (count > 0) {
           count--;
       } else{
           count = nbSlide - 1;
       }
       items[count].classList.add('myImage');
       } else if (e.keyCode === 39) {
        items[count].classList.remove('myImage');

        if (count < nbSlide -1) {
            count++;
        } else{
            count = 0;
        }
        items[count].classList.add('myImage');
       }
   }
   document.addEventListener('keydown', keyPress);
}

}

export {mySlider};