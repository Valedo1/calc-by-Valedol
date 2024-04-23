document.querySelectorAll('.button').forEach(button => {
   button.addEventListener('click', function() {
       const display = document.getElementById('display');
       const buttonValue = this.getAttribute('data-num') || this.getAttribute('data-op');
       if (display.innerHTML === "Ошибка") display.innerHTML = ""
       if (buttonValue === 'C') {
           display.innerHTML = '';
       } else if (buttonValue === '=') {
           if (display.innerHTML.includes("%")){
               const temp = display.innerHTML.split("%").map(s => Number(s))
               if (temp.length !== 2 || (isNaN(temp[0]) || isNaN(temp[1]))){
                   display.innerHTML = 'Ошибка';
               } else {
                   display.innerHTML = (temp[0]/temp[1]*100).toString()
               }
           } else {
               try {
                   display.innerHTML = eval(display.innerHTML);
               } catch (e) {
                   display.innerHTML = 'Ошибка';
               }
           }
       } else if (buttonValue === "plusminus"){
               display.innerHTML =isNaN(Number(display.innerHTML)) ? "Ошибка" : (Number(display.innerHTML) * -1).toString()
       } else if (buttonValue === "sqr") {
           display.innerHTML =isNaN(Number(display.innerHTML)) ? "Ошибка" : Number(display.innerHTML)*Number(display.innerHTML)
       } else {
           display.innerHTML += buttonValue;
       }
   });
});
