var mySlider = {
 
 
 clickSlider : () =>{
     alert("test");
 const items = document.querySelectorAll('img');
 const nbSlide = items.length;
 const suivant = document.getElementById('precedent');
 const precedent = document.getElementById('suivant');
  let count = 0;

   function slideSuivante() {
     alert("test");
       items[count].classList.remove('myImage');

       if (count < nbSlide -1) {
           count++;
       } else{
           count = 0;
       }
       items[count].classList.add('myImage');
   }
   suivant.addEvenListener('click', slideSuivante());
   function slidePrecedente() {
     items[count].classList.remove('myImage');
     if (count > 0) {
        count--;
    } else{
        count = nbSlide - 1;
    }
    items[count].classList.add('myImage');
   }
   precedent.addEvenListener('click', slidePrecedente());

   function keyPress(e) {
       if (e.keyCode === 37) {
           slidePrecedente();
       } else if (e.keyCode === 39) {
           slideSuivante();
       }
   }
   document.addEventListener('keydown', keyPress);
}

}

export {mySlider};