// JavaScript Document
// gmmLeftPanelWidth.js
var ThisFileName    = 'gmmLeftPanelWidth';  // назва цього файла.
var ThisFileNameExt = 'js';                 // тип цього файла. 

if (localStorage[[localStorage.gmmCheckboxPrefix]+ThisFileName] == "checked") {
  // якщо кнопка "gmmLeftPanelWidth" натиснута, то виконуємо наступне
  console.log(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
  // alert(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');


// ##### Визначаємо реальне значення елемента #####
// http://forum.htmlbook.ru/index.php?showtopic=27175
function getRealStyle(elem, name) {
  elem = typeof elem === 'string' ? document.getElementById(elem) : elem;
  if (elem.style == name) { // If this prop exist in "style" attribute
    return elem.style[name];
  } else if (elem.currentStyle) { // IE
    var re = /(\-([a-z]){1})/g;
    if (name == 'float') name = 'styleFloat';
    if (re.test(name)) {
      name = name.replace(re, function () {
        return arguments[2].toUpperCase();
      });
    }
    return elem.currentStyle[name] ? elem.currentStyle[name] : null;
  } else if (document.defaultView && document.defaultView.getComputedStyle) { // W3C
    var s = document.defaultView.getComputedStyle(elem, '');
    if (name == 'float') name = 'cssFloat';
    return s && s.getPropertyValue(name);
  } else {
    return null;
  }
}
// alert(getRealStyle('panel', 'width'));
// console.log(ThisFileName+': getRealStyle(\'panel\', \'width\') = '+ getRealStyle('panel', 'width'));
// ##### Визначаємо реальне значення елемента END #####




// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################


// ТЕСТ ФУНКЦІЇ
function gmmPanelObjParam(id, param1, param3) {

var PanelObjParam_px = getRealStyle(id, param1);  // Дізнаємося РЕАЛЬНЕ значення параметра width для елемента [@id="panel"]
//console.log(ThisFileName +': '+ id +' '+ param1 +' PanelObjParam_px = '+PanelObjParam_px);
var PanelObjParam_px = PanelObjParam_px.substring(0,PanelObjParam_px.length-2); // видаляємо останні 2 знаки (.length-2) із отриманого значення бо воно в "512px" а треба прочто цифру "512" 
//console.log(ThisFileName +': '+ id +' '+ param1 +' PanelObjParam_px = '+PanelObjParam_px);
var PanelObjParam    = parseInt(PanelObjParam_px); // конвертуємо з текстового значення в цифрове
//console.log(ThisFileName +': '+ id +' '+ param1 +' PanelObjParam = '+PanelObjParam);
var PanelObjParam_xx = PanelObjParam;             // 512 // можливо видалити
//console.log(ThisFileName +': '+ id +' '+ param1 +' PanelObjParam_xx = '+PanelObjParam_xx);

//var PanelObjParam_time = time1;
//localStorage.setItem(PanelObjParam_time, time1);

console.log(ThisFileName+': ПОЧАТКОВЕ ЗНАЧЕННЯ [@id="'+id+'"] '+param1+' = '+ PanelObjParam_px +' ');

  if (param3 < 0 ){ // якщо треба ЗМЕНШИТИ розмір // VER2
    //document.getElementById(id).style[param1] = PanelObjParam_xx + parseInt(param3) +'px'; // VER2
    //console.log(ThisFileName +': '+id+' '+param1+' :: '+PanelObjParam_xx + parseInt(param3)+' = '+(PanelObjParam_xx + parseInt(param3))+'px // VER2   мінус'); // VER2
    console.log(ThisFileName +': '+id+' '+param1+' :: '+PanelObjParam_xx + parseInt(param3)+' = '+(PanelObjParam_xx + parseInt(param3))+'px // VER3   мінус'); // VER3
  } else 
  if (param3 >= 0 ){ // якщо треба ЗБІЛЬШИТИ розмір // VER2
    //document.getElementById(id).style[param1] = PanelObjParam_xx + parseInt(param3) +'px'; // VER2
    //console.log(ThisFileName +': '+id+' '+param1+' :: '+PanelObjParam_xx + parseInt(param3)+' = '+(PanelObjParam_xx + parseInt(param3))+'px // VER2 плюс'); // VER2
    console.log(ThisFileName +': '+id+' '+param1+' :: '+PanelObjParam_xx +'+'+ parseInt(param3)+' = '+(PanelObjParam_xx + parseInt(param3))+'px // VER3 плюс'); // VER3
  }
 // if (typeof param2!="undefined")// VER1
 if (typeof param3!="undefined") // VER3
  document.getElementById(id).style[param1] = PanelObjParam_xx + parseInt(param3) +'px'; // VER3
  console.log(ThisFileName +': КІНЦЕВЕ ЗНАЧЕННЯ   [@id="'+id+'"] '+param1+' = '+document.getElementById(id).style[param1]+' ');
  console.log(ThisFileName +': ---------------------------------- ');
  // console.log(ThisFileName +': time ="'+id+'"] '+param1+' = '+document.getElementById(id).style[param1]+' - кінцева цифра ');
};


var param3var = '20'
gmmPanelObjParam('panel',               'width',  -param3var);   //*[@id="panel"]
gmmPanelObjParam('unified-control-bar', 'left',   -param3var);   //*[@id="unified-control-bar"]
gmmPanelObjParam('map',                 'left',   -param3var);   //*[@id="map"]
gmmPanelObjParam('unified-control-bar', 'width',   param3var);   //*[@id="unified-control-bar"]
gmmPanelObjParam('map',                 'width',   param3var);   //*[@id="map"]
gmmPanelObjParam('panel7',              'padding-left',   '0');   //*[@id="map"]
gmmPanelObjParam('panel7',              'padding-right',  '0');   //*[@id="map"]




// зменшуємо розмір другорядних елементів
// $('.classname').show(); // .hide()
$('.ucb-tab-header-title.panel-margin-start').hide(); // jQuery: приховали назву Map Maker // робочий аналог цього : document.getElementsByClassName('ucb-tab-header-title panel-margin-start').style.display = 'none';
console.log(ThisFileName +': Remove  *[@id="gw-tab-header"]/div[3] ');



// ########## *[@id="gw-tab-header"]/div[3] ВИДАЛЕННЯ ##########
// НЕ ПРАЦЮЄ ЧОМУСЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.getElementsByClassName('ucb-tab-header-title panel-margin-start').parentNode.removeChild(document.getElementsByClassName('ucb-tab-header-title panel-margin-start')); // видаляємо // ОРИГІНАЛЬНИЙ ВИКЛИК
// console.log(ThisFileName +': ВИДАЛИЛИ *[@id="gw-tab-header"]/div[3]');
// ########## *[@id="gw-tab-header"]/div[3] ВИДАЛЕННЯ END ##########





/*
  param1 = typeof param1 === 'string' ? document.getElementById(param1) : param1;
  for (i=i_min; i<=i_max; i++) {
    // alert(document.getElementById('panel').style.width); // ALERT!!!
    alert(param1); // ALERT!!!
    // document.getElementById(elem).style.width = n1-((i) * action)+'px';
    // document.getElementById(panel).style.width = n1+((i) * action)+'px';
    console.log(ThisFileName+': i = '+i+'; значення '+param1+' = '+document.getElementById(param1).style.width);
  };
};
DEBUGgmmLeftPanelWidth1('panel');
console.log(ThisFileName+': DEBUGgmmLeftPanelWidth1(\'panel\') = '+ DEBUGgmmLeftPanelWidth1('panel'));
// DEBUGgmmLeftPanelWidth1('panel','-1');
// console.log(ThisFileName+': DEBUGgmmLeftPanelWidth1(\'panel\', \'-1\') = '+ DEBUGgmmLeftPanelWidth1(param1, param2));
// DEBUGgmmLeftPanelWidth1('unified-control-bar','1');
// console.log(ThisFileName+': DEBUGgmmLeftPanelWidth1(\'unified-control-bar\', \'1\') = '+ DEBUGgmmLeftPanelWidth1('topbar','1'));
// */


/* вставив починаючи для відладки з 0016 START */
/*
function branding()
{
    // if(bDoBrandingFunction)  // цикл 
    // {
        setTimeout(function()
        {
           //document.getElementById('panel').style.width="270px";
            console.log(ThisFileName+': цикл branding');
                
                //$("#panel").animate({width: 500}, 300); //.attr("style", $(".main").attr("style") + "; box-shadow: 0 0 10px #555;");
                // $(".head_banner").animate({height: 90}, 300, function(){$(window).resize();});
                // bDoBrandingFunction = false;
            // }
            // if(bDoBrandingFunction) branding();
        }, 10000);
    // }
}
branding();
// */

/*
setInterval(function()
{
  alert("це вилізло з - gmmLeftPanelWidth.js 0016");
  //$('#header').css("position", "absolute");
  
  d = document.getElementById('header');
  d.style.width="270px";
  d.style.position="absolute";
}, 120000);
/* вставив починаючи з 0016 END */








}; // ################## ЗАКРИВАЮЧА ДУЖКА ДЛЯ IF