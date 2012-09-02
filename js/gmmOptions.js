// JavaScript Document
// gmmOptions.js
var ThisFileName    = 'gmmOptions'; // назва цього файла.
var ThisFileNameExt = 'js';         // тип цього файла. 

var gmmOptionsPanelContForm = ''+
// ОСНОВНИЙ ФУНКЦІОНАЛ !!! (не редагуати!)
// http://jsfiddle.net/TPP7E/1/
// щоб побачити його логіку в роботі перейди на сайт - там все показано!
/*
'<form id="options">'+
  '<fieldset>'+
    // '<br /><br /><legend>Налаштування 0042:</legend>'+
    // '<label for="check-all">                 <input type="checkbox" name="data" class="checkAll" id="check-all"        checked> <b><span>Select All</span></b></label>'+
    '<br /><label for="gmmHint">                <input type="checkbox" name="data" class="filter"   id="gmmHint"                 > <b>gmmHint</b></label></span>'+
    '<br /><label for="gmmLeftPanelWidth">      <input type="checkbox" name="data" class="filter"   id="gmmLeftPanelWidth"       > <b>gmmLeftPanelWidth</b></label>'+
    '<br /><label for="gmmNavigationBarOptions"><input type="checkbox" name="data" class="filter"   id="gmmNavigationBarOptions" > <b>gmmNavigationBarOptions</b></label>'+
    '<br /><label for="gmmStatTopUsers">        <input type="checkbox" name="data" class="filter"   id="gmmStatTopUsers"         > <b>gmmStatTopUsers</b></label>'+
    '<br /><label for="gmmTopBar">              <input type="checkbox" name="data" class="filter"   id="gmmTopBar"               > <b>gmmTopBar</b></label>'+
    '<br /><label for="gmmHeader">              <input type="checkbox" name="data" class="filter"   id="gmmHeader"               > <b>gmmHeader</b></label>'+
    '<br /><label for="gmmTopLoading">          <input type="checkbox" name="data" class="filter"   id="gmmTopLoading"           > <b>gmmTopLoading</b></label>'+
  '</fieldset>'+
'</form>'+
''+
*/

'<h1><img src="'+localStorage.gmmSrcCrx+'icons/icon128.png">Налаштування GMM+</h1>'+
'<div id="div1" class="options_content" style="visibility:visible;">'+
'<h3>Інтерфейс</h3>'+
'<label for="gmmTopBar"><input type="checkbox" name="data" class="filter"   id="gmmTopBarCheckbox"               > <b>gmmTopBar</b></label> - Приховати верхнє чорне Топ-Меню ( id="topbar" )<br> '+
'<label for="gmmHeader"><input type="checkbox" name="data" class="filter"   id="gmmHeaderCheckbox"               > <b>gmmHeader</b></label>- Приховати логотип та пошук ( id="header" )<br>'+
'<br /><img src="'+localStorage.gmmSrcCrx+'img/gmmHeader.png" class="options_content_img" />'+
'</div>'+


'<div id="div2" class="options_content">'+
'<h3>Юзабіліті</h3>'+
'<label for="gmmHint"><input type="checkbox" name="data" class="filter"   id="gmmHintCheckbox"                 > <b>gmmHint</b></label> - Підняти хінт (біля мишки, коли малюється крива) на "left:+30px; top:-30px;" ( div class="floathelp" )<!-- до елемента div class="floathelp" додаємо margin-left:100px; --><br>'+
'<br /><img src="'+localStorage.gmmSrcCrx+'img/gmmHint.png" class="options_content_img" />'+
'</div>'+


'<div id="div3" class="options_content">'+
'<h3>НА МАЙБУТНЄ</h3>'+
'<ul>'+
'<li>Система коментування профіля на базі наприклад дискуса. Коли під кожну ІД можна буде написати коментар.</li>'+
'<li>Вивести окремим лінком Пульс Юзера</li>'+
'<li>Зробити перелік країн для пульса. Ті країни яккі зараз не відкриті - зробити "сірим".</li>'+
'<li>на далеке майбутнє: зробити можливість юзеру додати своїх друзів до списка спостереження.</li>'+
'<li>Юзер заповнює форму, в яку вводить свій номер (http://www.google.com/mapmaker?gw=66&uid=200886588189842640849). на базі цих даних ми викусуємо із його статистики дані і виводмо десь зверху в топах.</li>'+
'<li>пробуємо вкрутити авторизацію</li>'+
'<li>синхронізація додатку і його налаштувань між компами юзера</li>'+
'<li>чат в гмм</li>'+
'<li>- http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html зміна кольорів потрібних параметрів (дороги/річки/тощо)</li>'+
'</ul>'+
'</div>'+


'<div id="div4" class="options_content">'+
'<h3>Статистика</h3>'+
'<label for="gmmStatTopUsers"><input type="checkbox" name="data" class="filter"   id="gmmStatTopUsersCheckbox"         > <b>gmmStatTopUsers</b></label> (<a href="https://sites.google.com/site/gmmstatistics/top-100-mappers/top-contributors" target=_blank>link</a>) - вкладка для перегляду статистики ТОП-100 (концепт реалізації ще не придумав, але цим користуються часто.)<br>'+
'</div>'+


'<div id="div5" class="options_content">'+
'<h3>НЕ СОРТОВАНЕ</h3>'+
'<!-- сортуємо по алфавіту "як в папці лежить" (щоб потім легше шукати було. Коли буде все готово - відсортуємо за логікою)  -->'+
'<label for="gmmLeftPanelWidth">      <input type="checkbox" name="data" class="filter"   id="gmmLeftPanelWidthCheckbox"       > <b>gmmLeftPanelWidth</b></label> - звужена ліва панель параметрів<br>'+
'<label for="gmmNavigationBarOptions"><input type="checkbox" name="data" class="filter"   id="gmmNavigationBarOptionsCheckbox" > <b>gmmNavigationBarOptions</b></label> - Створити додаткові позиції в меню навігації (правий верхній кут карти)<br>'+
'<label for="gmmTopLoading">          <input type="checkbox" name="data" class="filter"   id="gmmTopLoadingCheckbox"           > <b>gmmTopLoading</b></label> - Підняти натіфікейшени на 30пх ( id="loading" )<br>'+
'<label for="gmmAlert">               <input type="checkbox" name="data" class="filter"   id="gmmAlertCheckbox"           > <b>gmmAlert</b></label> - Увімкнути алерти в консолі<br>'+
'</div>'+
''+


/*
// ПОКИ ЩО НЕ ВИДАЛЯТИ!!! Я ДУМАЮ ЯК ЗАЮЗАТИ ФУНКЦІОНАЛ!!!
'<p><label><input type="checkbox" class="checkAll"  id="check-all" checked /><span>Select All</span></label></p>'+
'<p><label><input type="checkbox" class="filter"    id="in-app" checked />In-App</label></p>'+
'<p><label><input type="checkbox" class="filter"    id="in-stream" checked />In-Stream</label></p>'+
'<p><label><input type="checkbox" class="filter"    id="in-banner" checked />In-Banner</label></p>'+
''+
'<div class="results">'+
'<fieldset class="tags">'+
// '<label><input type="checkbox" class="checkAll" id="check-all"  checked /><span>Select All</span></label> <br />'+
'<label><input type="checkbox" class="filter"   id="in-banner"  checked />In-Banner</label>               <span class="in-banner">  <a href="/link/within_site/" >ON</a></span><br />'+
'<label><input type="checkbox" class="filter"   id="in-stream"  checked />In-Stream</label>               <span class="in-stream">  <a href="/link/within_site/" >ON</a></span><br />'+
'<label><input type="checkbox" class="filter"   id="in-app"     checked />In-App</label>                  <span class="in-app">     <a href="/link/within_site/" >ON</a></span><br />'+
// '<li class="in-stream in-banner"><a href="/link/within_site/" >Link 3</a></li>'+
'</fieldset>'+
'</div>'+
*/
'';



// створюємо вкладений div  http://jemand.ru/examples/plavayushhij-blok-s-pomoshhyu-jquery.html
// элемент-список UL
var list = document.getElementById('gmmOptions');
// новый элемент
var gmmOptionsDiv = document.createElement('div');

var gmmOptionsPanelOverlayCblock  = "document.getElementById('gmmOptionsPanelOverlayC').style.display='block'";
var gmmOptionsPanelOverlayCnone   = "document.getElementById('gmmOptionsPanelOverlayC').style.display='none'";
var gmmOptionsPanelContCblock     = "document.getElementById('gmmOptionsPanelContC').style.display='block'";
var gmmOptionsPanelContCnone      = "document.getElementById('gmmOptionsPanelContC').style.display='none'";

gmmOptionsDiv.innerHTML = ''+
'<!-- CENTER панель START -->'+
'<!-- http://jemand.ru/vydvigayushhayasya-panel-na-css/ -->'+
// КНОПКА З ПРАВОГО БОКУ ЯКА АКТИВУЄ ЛайтБокс (виклик) START
'<a href="javascript:void(0)" onclick="'+gmmOptionsPanelOverlayCblock+'; '+gmmOptionsPanelContCblock+'"><div id="gmmOptionsButton">'+'+'+'</div></a>'+
// КНОПКА З ПРАВОГО БОКУ ЯКА АКТИВУЄ ЛайтБокс (виклик) END

'<div id="gmmOptionsPanelOverlayC" class="gmmOptionsPanelOverlayC"></div>'+

'<div id="gmmOptionsPanelContC" class="gmmOptionsPanelContC">'+gmmOptionsPanelContForm+'<br /><br /><br /><br />'+
'<center><button id="gmmOptionsPanelOverlayCcloseButton" class="gmmOptionsPanelOverlayCcloseButton"  i__d="gbqfb" c__lass="gbqfb"><a  s__tyle="bottom:30px;" href="javascript:void(0)" onclick="'+gmmOptionsPanelOverlayCnone+'; '+gmmOptionsPanelContCnone+'">Close</a></button></center>'+      

'<a class="gmmOptionsPanelOverlayCclose" href="javascript:void(0)" onclick="'+gmmOptionsPanelOverlayCnone+'; '+gmmOptionsPanelContCnone+'"><span class="gmmOptionsPanelOverlayCcloseX"></span></a>'+                                            
'</div>'+
'<!-- CENTER панель END -->'+
'';
// добавление в конец
list.appendChild(gmmOptionsDiv);
// створюємо вкладений div END


// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################


