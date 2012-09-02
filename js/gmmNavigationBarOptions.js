// JavaScript Document
// gmmNavigationBarOptions.js
var ThisFileName    = 'gmmNavigationBarOptions'; // назва цього файла.
var ThisFileNameExt = 'js'; // тип цього файла. 

if (localStorage[[localStorage.gmmCheckboxPrefix]+ThisFileName] == "checked") {
  // якщо кнопка "gmmNavigationBarOptions" натиснута, то виконуємо наступне
  console.log(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
  // alert(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
}

// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################







/*
var gmmNavigationBarOptions = document.getElementById('navigation-bar-options');

window.onload = function() {                                                    // Create an onload event handler that assigns the load event to a function.
  gmmNavigationBarOptions.innerHTML = "КОД : gmmNavigationBarOptions";          // в новій версії ГММ видає помилку в консолі
  // alert('ПРАЦЮЄ! (це повыдомлення вивелось з contentscript_gmm.js)');           // 0018 при завантаженні сторінки один раз видає цей алерт
  console.log('Пишемо з файла '+ ThisFileName +': gmmNavigationBarOptions ');
}
*/




// *********************** ТЕСТ navigation-bar-options *************************
//                 ТУТ ПОМИЛКА - ТРЕБА РОЗІБРАТИСЬ ЧОМУ ГЛЮЧИТЬ
// для теста - 88 -  (
var gmmNavigationBarOptions = document.getElementById('navigation-bar-options');
  window.onload = function() {
    window.setInterval( function() {
      console.log('файл '+ ThisFileName +': navigation-bar-options');

      // $('.navigation-bar-options').css({'right':'100px'});                   // даний запит потребує jQuery тому ми записали його інакше.
      // window.getElementsByClassName('navigation-bar-options').setAttribute('css', 'right:100px'); // не пішло, пробууємо не через "window.", а через "document."
      // document.getElementsByClassName('navigation-bar-options')[0].setAttribute('right', '100px');
      gmmNavigationBarOptions.setAttribute('right', '100px');
    }, 60000);
  }
// *********************** ТЕСТ navigation-bar-options END *********************























