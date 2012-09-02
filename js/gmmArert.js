// JavaScript Document
// gmmAlert.js
var ThisFileName    = 'gmmAlert'; // назва цього файла.
var ThisFileNameExt = 'js';       // тип цього файла. 

if (localStorage[[localStorage.gmmCheckboxPrefix]+ThisFileName] == "checked") {
  // якщо кнопка "gmmAlert" натиснута, то виконуємо наступне
  console.log(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
  alert(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
    
  alert(ThisFileName+'.'+ThisFileNameExt+': Показуємо алерти в консолі - START');


  // ########## Перевірка на підтримку "sessionStorage" START
  console.log(ThisFileName+': Перевірка на підтримку "sessionStorage" START');
  if(window.sessionStorage)
  {
    console.log(ThisFileName+': Браузер ПІДТРИМУЄ "sessionStorage"');
    // alert(ThisFileName+'Браузер ПІДТРИМУЄ "sessionStorage"');
  } else {
    console.log(ThisFileName+': Браузер НЕ підтримує "sessionStorage"');
    // alert(ThisFileName+'Браузер НЕ підтримує "sessionStorage"');
  };
  console.log(ThisFileName+': Перевірка на підтримку "sessionStorage" END');
  // ########## Перевірка на підтримку "sessionStorage" END



  // ########## Перевірка на підтримку "localStorage" START
  console.log(ThisFileName+': Перевірка на підтримку "localStorage" START');
  if(window.localStorage)
  {
    console.log(ThisFileName+': Браузер ПІДТРИМУЄ "localStorage"');
    // alert(ThisFileName+'Браузер ПІДТРИМУЄ "localStorage"');
  } else {
    console.log(ThisFileName+': Браузер НЕ підтримує "localStorage"');
    // alert(ThisFileName+'Браузер НЕ підтримує "localStorage"');
  };
  console.log(ThisFileName+': Перевірка на підтримку "localStorage" END');
  // ########## Перевірка на підтримку "localStorage" END
  
  
  // ########## window.localStorage.key();
  // показує ВСІ значення які є для "localStorage" в межах даного додатку.
  var i_min = 0;
  var i_max = window.localStorage.length;
  function DEBUGlocalStorageKey() {
    for (i=i_min;i<=i_max;i++) {
     console.log(ThisFileName+': '+i+' = '+ window.localStorage.key(i) +' значення = '+ localStorage.getItem(window.localStorage.key(i)));
    };
  };
  DEBUGlocalStorageKey();
  // ########## window.localStorage.key(); END
  
  
  // ########## цикл таймера START
  window.onload = function() {
    window.setInterval(function() {
      console.log(ThisFileName +': тест цикла таймера, кожні 120 сек');
      // alert(ThisFileName +'ALERT!');
    },120000);
  };
  // ########## цикл таймера END

alert(ThisFileName+'.'+ThisFileNameExt+': Показуємо алерти в консолі - END');

}; // закриваюча дужка для IF 
// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################





















// *********************** ПОШУК СЛІВ В ДОКУМЕНТІ ******************************
// шукаємо якийсь текст і пишемо в консоль чи його знайшли. Далі буду навертати цю функцію.
window.setInterval( function() {
  // якщо знаходимо в коді сторінки знаходимо "ЗНАЧЕННЯ" (".floathelp") то ...
  var regex1 = 'Дорога';
  var regex2 = 'Статистика';  
  // var regex = navigation-bar-options;
  // var navigation-bar-options = 'navigation-bar-options';
  //if (regex.test(document.body.innerText)) {                                  // Test the text of the body element against our regular expression.
  if (document.body.innerText.indexOf(regex1) != -1) {                          // це аналог ЦЬОГО:  if (regex.test(document.body.innerText)) { 
    chrome.extension.sendRequest({}, function(response) {});                    // The regular expression produced a match, so notify the background page.
    console.log(ThisFileName +': Значення "' + regex1 + '" знайдено!');         // якщо знайшло то пише в консоль
  } else {
    console.log(ThisFileName +': Значення "'+ regex1 +'" НЕ знайдено!');        // якщо не знайшло то пише в консоль
  }
  if (document.body.innerText.indexOf(regex2) != -1) {                          // це аналог ЦЬОГО:  if (regex.test(document.body.innerText)) { 
    chrome.extension.sendRequest({}, function(response) {});                    // The regular expression produced a match, so notify the background page.
    console.log(ThisFileName +': Значення "' + regex2 + '" знайдено!');         // якщо знайшло то пише в консоль
  } else {
    console.log(ThisFileName +': Значення "'+ regex2 +'" НЕ знайдено!');        // якщо не знайшло то пише в консоль
  }
}, 120000);
// *********************** ПОШУК СЛІВ В ДОКУМЕНТІ END **************************

















/*
// ЕКСПЕРИМЕНТ 0045 - ВИЗНАЧЕННЯ НАЗВИ ФАЙЛА
function getThisFileName(ThisFileId) {
  var ThisFileSRC = document.getElementById(ThisFileId).getAttribute("src");
  return ThisFileSRC.substr(ThisFileSRC.lastIndexOf('/')+1,ThisFileSRC.lastIndexOf('.')- ThisFileSRC.lastIndexOf('/')-1);
}
//ThisFileSRC = getThisFileName("sc_gmmjQueryMin"); //    "sc_" AKA "script_checker_" WORK!
ThisFileSRC = getThisFileName("sc_"); //    "sc_" AKA "script_checker_"
var ThisFileName    = ThisFileSRC;          // назва цього файла.
// ЕКСПЕРИМЕНТ 0045 - ВИЗНАЧЕННЯ НАЗВИ ФАЙЛА END
*/
















