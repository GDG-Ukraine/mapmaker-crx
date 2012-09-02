// УВАГА! САМЕ ЦЕЙ ФАЙЛ ВІДПРАЦЬОВУЄ В ФОНІ НА ВІДКРИТОМУ ВЖЕ МАПМЕЙКЕРІ, у фонових вкладках теж
var ThisFileName    = 'gmmContentscript';  // назва цього файла.
var ThisFileNameExt = 'js';                // тип цього файла. 
var SrcCrx = chrome.extension.getURL('');  // UNIVERSAL
console.log(ThisFileName +': SrcCrx = '+ SrcCrx);
localStorage.setItem("gmmSrcCrx", SrcCrx); // закидаємо змінну "SrcCrx" в ЛС щоб можна було її брати в усіх файлах
console.log(ThisFileName +': localStorage.gmmSrcCrx = '+ localStorage.gmmSrcCrx);

localStorage.gmmjQueryMin;
console.log(ThisFileName +': localStorage.gmmjQueryMin = '+ localStorage.gmmjQueryMin);

// var gmm_src_alert = (location.protocol=='https:'?'https://dl.dropbox.com/u/2574140/mapmaker-crx/js/gmmArert.js':'http://dl.dropbox.com/u/2574140/mapmaker-crx/js/gmmArert.js'); // запуск по УРЛу у відповідності до протокола. (зробити потім)

// Виклик в <HEAD>+<BODY>
function LoadFileHead(FileName, FileExt){
  if (FileExt=="js"){ //if filename is a external JavaScript file
    var FileRef=document.createElement('script');
    FileRef.setAttribute("src", localStorage.gmmSrcCrx+'js/'+FileName+'.'+FileExt);
    FileRef.setAttribute("type", "text/javascript");
    FileRef.setAttribute("charset", "UTF-8");
    FileRef.setAttribute("async", '');
  }
  else if (FileExt=="css"){ //if filename is an external CSS file
    var FileRef=document.createElement("link");
    FileRef.setAttribute("href", localStorage.gmmSrcCrx+'css/'+FileName+'.'+FileExt)
    FileRef.setAttribute("rel", "stylesheet");
    FileRef.setAttribute("type", "text/css");
    FileRef.setAttribute("charset", "UTF-8");
  }
  if (typeof FileRef!="undefined") {
    document.getElementsByTagName("head")[0].appendChild(FileRef);
    console.log(ThisFileName +': LOAD = OK! ( '+FileName+'.'+FileExt+' ) - Створили виклик в <HEAD>'); 
  } 
  else {
    console.log(ThisFileName +': ERROR!'+FileName+' = '+FileRef+' ) - НЕ Створили виклик в <HEAD>' ); 
  };  
};
function LoadFileBody(FileName, FileExt){
  if (FileExt=="div"){ //if filename is a external JavaScript file
    var FileRef=document.createElement('div');
    FileRef.setAttribute("id", FileName);
    FileRef.setAttribute("class", FileName);
    FileRef.setAttribute("style", "");
  }
  if (typeof FileRef!="undefined")
  document.getElementsByTagName("body")[0].appendChild(FileRef);
  console.log(ThisFileName +': LOAD = OK! ( '+FileName+'.'+FileExt+' ) - Створили елемент в <BODY>'); 
};


// Виклик <HEAD>
// LoadFileHead("22222javascript.php", "js");    // dynamically load .JS file
// LoadFileHead("33333mystyle.css", "css");      // dynamically load .css file
LoadFileHead("jquery-1.7.2.min", "js");       // Виклик через Оригінальний файл (зберігаю його провсяк випадок)
//LoadFileHead("gmmjQueryMin", "js");              // Виклик через ЛС (зараз ми вантажимо jQuery через нього!)

//LoadFileHead("jquery.mousewheel-3.0.6.pack", "js");       // для fancyapps.com - mousewheel plugin (this is optional)
//LoadFileHead("", "js");       // для fancyapps.com
LoadFileHead("localStorageCheckValue", "js");
LoadFileHead("gmmArert", "js");
LoadFileHead("gmmGoogleAnalytics", "js");
//LoadFileHead("gmmHint", "js");
LoadFileHead("gmmLeftPanelWidth", "js");
//LoadFileHead("gmmNavigationBarOptions", "js");
//LoadFileHead("gmmStatTopUsers", "js");
LoadFileHead("gmmTopBar", "js");
//LoadFileHead("gmmTopLoading", "js");
LoadFileHead("gmmOptions", "js");
//LoadFileHead("gmmOptionsButton", "js");
LoadFileHead("gmmOptions", "css");
LoadFileHead("gmmOptionsButton", "css");
// Виклик </HEAD> END
// Виклик в <BODY>
LoadFileBody("gmmOptions", "div");
//LoadFileBody("gmmOptionsButton", "div"); // закоментована бо запускається з LoadFileBody("gmmOptions", "div");
// Виклик в </BODY> END
// Виклик в <HEAD>+<BODY>END























// var foo = localStorage.getItem('gmmHint');
// alert(foo); //bar

// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################


// ЕКСПЕРИМЕНТ 0046A2
//if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "checked") { // 111
function CheckCheckbox(CheckboxName, CheckboxTime){                             // function CheckCheckbox
////if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "checked") {
////console.log(ThisFileName +': Галочка '+CheckboxName+' стоїть!');
    if (CheckboxTime > '500'){ //if filename is window.setInterval
      window.setInterval(function() {
        console.log(ThisFileName +': setInterval START :');
        console.log(ThisFileName +': CheckboxName = '+CheckboxName);
        //eval('CheckCheckboxCheckerFunc='+localStorage['Check'+CheckboxName]);
        eval('CheckCheckboxCheckerFunc = localStorage.CheckgmmTopBar');
        CheckCheckboxCheckerFunc();
        console.log(ThisFileName +': ------------- Check'+CheckboxName);
        //console.log(ThisFileName +': setInterval  END  : Таймер = '+ (CheckboxTime / 1000)+' сек');
        console.log(ThisFileName +': -------------------------------------------');
      }, CheckboxTime); // закриваюча дужка для window.setInterval
    }
    else if (CheckboxTime = '0'){ //if filename is a setTimeout
      window.setTimeout(function() {
        console.log(ThisFileName +': setTimeout START :');
        console.log(ThisFileName +': на початку CheckboxNameRef = '+CheckboxNameRef+'');
        var CheckboxNameRef = "setTimeout";
        console.log(ThisFileName +': тепер      CheckboxNameRef = '+CheckboxNameRef+'');
        console.log(ThisFileName +': CheckboxName = '+ CheckboxName);
        eval('CheckCheckboxCheckerFunc='+localStorage['Check'+CheckboxName]);
        CheckCheckboxCheckerFunc();
        console.log(ThisFileName +': setTimeout  END  : Таймера нема! Виконалось!');
      }, CheckboxTime); // закриваюча дужка для window.setInterval
    };
////}; // IF
/*
if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "not") {
    console.log(ThisFileName +': Галочки '+CheckboxName+' нема!');
  }; // IF
*/
}; // function CheckCheckbox
//}; //111
// ЕКСПЕРИМЕНТ 0046A2 END



/*
// ЕКСПЕРИМЕНТ 0045 END
  window.setInterval( function() {
  //setTimeout('CheckTarara("gmmTopBar"
    if (localStorage[[localStorage.gmmCheckboxPrefix]+CheckboxName] == "checked") {
      //Check+CheckboxName ();                     // наприклад *****CheckboxName***** = gmmTopBar
      //window['Check'+CheckboxName] = function(){hbbhk};   // наприклад *****CheckboxName***** = gmmTopBar
      console.log(ThisFileName +': CheckboxName = '+ CheckboxName);
      eval('CheckCheckboxCheckerFunc='+localStorage['Check'+CheckboxName]);
      CheckCheckboxCheckerFunc();
    }                       // закриваюча дужка для IF 
  }, CheckboxTime);       // закриваюча дужка для window.setInterval
};                          // закриваюча дужка для function CheckCheckbox
// ЕКСПЕРИМЕНТ 0045 END
*/


// Виклик CheckCheckbox
// CheckCheckbox('gmmArert',                 '');
// CheckCheckbox('gmmHint',                  '');
// CheckCheckbox('gmmLeftPanelWidth',        '');
// CheckCheckbox('gmmNavigationBarOptions',  '');
// CheckCheckbox('gmmStatTopUsers',          '');
CheckCheckbox('gmmTopBar', '10000');
// CheckCheckbox('gmmTopLoading',            '');
// Виклик CheckCheckbox END












