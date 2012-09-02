// JavaScript Document
// gmmTopBar.js
var ThisFileName    = 'gmmTopBar';  // назва цього файла.
var ThisFileNameExt = 'js';         // тип цього файла. 
var CheckboxName    = ThisFileName; // назва чекбокса для gmmContentscript

var gmmTopBar = document.getElementById('topbar');  // присвоюємо значення 'gmmTopBar' яке береться зі сторінки елементу <div id="topbar">
var gmmTopBarReplace = ''; // Створюємо контент для елемента "gmmTopBarReplace" який замінить собою gmmTopBar. Власне в нашому випадку ми зараз ставимо порожный елемент, щоб Топ-Меню зхлопнулось.

function gmmTopBarReplace(){ 
  // ### gmmTopBar ЗАМІНА ###############################
  gmmTopBar.innerHTML = gmmTopBarReplace; // заміняємо значення gmmTopBar на gmmTopBarReplase
  console.log(ThisFileName +': замінили значення gmmTopBar на gmmTopBarReplace');
  console.log(ThisFileName +': приховали gmmTopBar');
  // ### gmmTopBar ЗАМІНА END ###########################
};

function gmmTopBarRemove(){ 
  // ### gmmTopBar ВИДАЛЕННЯ ############################
  document.getElementById('topbar').parentNode.removeChild(document.getElementById('topbar')); // видаляємо // ОРИГІНАЛЬНИЙ ВИКЛИК
  // gmmTopBar.parentNode.removeChild(gmmTopBar); // видаляємо  // МОДИФІКОВАНИЙ ВИКЛИК
  console.log(ThisFileName +': ВИДАЛИЛИ [@id="topbar"]');
  // ### gmmTopBar ВИДАЛЕННЯ END ########################
};

function gmmTopBarOtherRemove(){
  // ### gmmTopBar ВИДАЛЕННЯ ДОДАТКОВИХ ЕЛЕМЕНТІВ #######
  //*[@id="fullscreen"]
  //*[@id="exit-fullscreen"]
  document.getElementById('exit-fullscreen').parentNode.removeChild(document.getElementById('exit-fullscreen')); // видаляємо 
  console.log(ThisFileName +': видалили [@id="exit-fullscreen"]');
  document.getElementById('fullscreen').parentNode.removeChild(document.getElementById('fullscreen')); // видаляємо 
  console.log(ThisFileName +': видалили [@id="fullscreen"]');
  // ### gmmTopBar ВИДАЛЕННЯ ДОДАТКОВИХ ЕЛЕМЕНТІВ END ###
};

function gmmTopBarHide(){ 
  // ### gmmTopBar ПРИХОВАТИ ############################
  document.getElementById('topbar').style.display = "none"; // приховуємо // ОРИГІНАЛЬНИЙ ВИКЛИК
  //gmmTopBar.style.display = "none"; // приховуємо  // МОДИФІКОВАНИЙ ВИКЛИК
  console.log(ThisFileName +': ПРИХОВАЛИ gmmTopBar');
  // ### gmmTopBar ПРИХОВАТИ END ########################
};

function gmmTopBarUnHihe(){ 
  // ### gmmTopBar ПОКАЗАТИ #############################
  // document.getElementById('topbar').style.display = "none"; // приховуємо // ОРИГІНАЛЬНИЙ ВИКЛИК
  gmmTopBar.style.display = ""; // Показуємо  // МОДИФІКОВАНИЙ ВИКЛИК
  console.log(ThisFileName +': ПОКАЗАТИ gmmTopBar');
  // ### gmmTopBar ПОКАЗАТИ END #########################
};




// ****0045**** // if (localStorage[[localStorage.gmmCheckboxPrefix]+ThisFileName] == "checked") {
// function Check_+CheckboxName(){ // типу *****CheckboxName***** = gmmTopBar           // варіант-1
// function Check*****CheckboxName***** (){ // типу *****CheckboxName***** = gmmTopBar  // варіант-2
// window['Check'+CheckboxName] = function(){ // типу *****CheckboxName***** = gmmTopBar  // варіант-3
window.CheckgmmTopBar = function(){ // типу *****CheckboxName***** = gmmTopBar  // варіант-4
  // якщо кнопка "gmmTopBar" натиснута, то виконуємо наступне
  console.log(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
  if (gmmTopBar.style.display != 'none'){                                                    // якщо Блок показується
    if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "checked") {     // якщо галочка стоїть
      console.log(ThisFileName +': Блок показується - галочка стоїть');
      gmmTopBarHide();
      console.log(ThisFileName +': ПРИХОВУЄМО!');
    };
    if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "not") {         // якщо галочка НЕ стоїть
      console.log(ThisFileName +': Блок показується - галочка НЕ стоїть');
      console.log(ThisFileName +': Нічого не робимо, бо не стоїть галочка');
    };
  } else
  if (gmmTopBar.style.display = 'none'){                                                // якщо Блок прихований
    if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "checked") {     // якщо галочка стоїть
      console.log(ThisFileName +': Блок НЕ показується - галочка стоїть');
      console.log(ThisFileName +': Нічого не робимо, бо він вже прихований');
    };
    if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "not") {         // якщо галочка НЕ стоїть
      console.log(ThisFileName +': Блок НЕ показується - галочка НЕ стоїть');
      gmmTopBarUnHihe();
      console.log(ThisFileName +': ПОКАЗУЄМО!');
    };
  };
}; // закриваюча дужка для function 




// ВАРІАНТИ ФУНКЦІЙ //
// gmmTopBarReplace();        // ЗАМІНА
// gmmTopBarRemove();         // ВИДАЛЕННЯ
// gmmTopBarOtherRemove();      // ВИДАЛЕННЯ другорядних елементів
// gmmTopBarHide();              // ПРИХОВАТИ
// gmmTopBarUnHihe();          // ПОКАЗАТИ
// ВАРІАНТИ ФУНКЦІЙ END //


//localStorage['CheckgmmTopBar'] =  window['CheckgmmTopBar'];
localStorage['CheckgmmTopBar'] =  CheckgmmTopBar;
//localStorage['Check'+CheckboxName] =  window['Check'+CheckboxName];



// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################




// ОРИГІНАЛЬНИЙ КОД
// <a id="fullscreen" onclick="this.blur(); toggleFullScreen();d0('fullscreen'); d1('exit-fullscreen')" href="javascript:void(0);" ct="ln" cad="src:enter-fullscreen" class="kd-button small ucb-fullscreen-toggle smallWindowSmallMargin" style="display: none; "><img src="/mapmaker/mapfiles/transparent.png" title="Переключитися в повноекранний режим" class="SPRITE_fullscreen"></a>

// <a id="exit-fullscreen" style="" onclick="this.blur(); toggleFullScreen();d0('exit-fullscreen'); d1('fullscreen')" href="javascript:void(0);" ct="ln" cad="src:exit-fullscreen" class="kd-button small ucb-fullscreen-toggle smallWindowSmallMargin"><img src="/mapmaker/mapfiles/transparent.png" title="Переключитися в повноекранний режим" class="SPRITE_xfullscreen"></a>
// ОРИГІНАЛЬНИЙ КОД END




/*
console.log(ThisFileName +': BUGFIX: збільшуємо ширину вікна до "100%", щоб не зявлялась з низу дірка висотою у вирізаний блок');
alert(ThisFileName +': BUGFIX:1');
document.getElementById('page').style.height = "100%"; // BUGFIX:1 збільшуємо ширину вікна до "100%", щоб не зявлялась з низу дірка висотою у вирізаний блок 
console.log(ThisFileName +': BUGFIX:1');
alert(ThisFileName +': BUGFIX:2');
document.getElementById('main_map').style.height = "100%"; // BUGFIX:2  
console.log(ThisFileName +': BUGFIX:2');
alert(ThisFileName +': BUGFIX:3');
document.getElementById('map').style.height = "100%"; // BUGFIX:3  
console.log(ThisFileName +': BUGFIX:3');
alert(ThisFileName +': BUGFIX:4');
document.getElementById('panel').style.height = "100%"; // BUGFIX:4  
console.log(ThisFileName +': BUGFIX:4');
*/











/*
// варіант Євгена-2
console.log(ThisFileName+'.'+ThisFileNameExt+': 0000000');
document.body.innerHTML += ('<style type="text/css">#topbar {display:none !important; }</style>');
console.log(ThisFileName+'.'+ThisFileNameExt+': 0000000aaaaaaaaaaaa');
// варіант Євгена-2 END
*/



/*
// варіант Євгена-1
setInterval(function(){
  console.log(ThisFileName+'.'+ThisFileNameExt+': 1111111');
if
(document.getElementById('topbar') &&  (document.getElementById('topbar').style.display != 'none'))
  {
      console.log("FIXING!");
      document.getElementById('topbar').style.display = 'none';
      // window.toggleFullScreen();
      // window.toggleFullScreen();
  }else console.log('NOT FIXING: '+document.getElementById('topbar').style.display);
    console.log(ThisFileName+'.'+ThisFileNameExt+': 222222');
}, 5000);
  console.log(ThisFileName+'.'+ThisFileNameExt+': 3333333');
// варіант Євгена-1 END
*/




  








// #################   ВСЕ ЩО НИЖЧЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################
