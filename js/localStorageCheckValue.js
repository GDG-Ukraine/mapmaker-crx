// JavaScript Document
// Для "options_gmm.html" та "popup_gmm.html" бо вони юзають однакову логіку
// localStorageCheckValue.js
var ThisFileName    = 'localStorageCheckValue'; // назва цього файла.
var ThisFileNameExt = 'js';                     // тип цього файла. 
localStorage.setItem('gmmCheckboxPrefix', 'gmmCheckbox_'); // закидаємо змінну "gmmCheckboxPrefix" в ЛС щоб можна було її брати в усіх файлах


console.log(ThisFileName +': Почали читати '+ThisFileName);
console.log(ThisFileName +': У нас зараз: gmmCheckboxPrefix = '+localStorage.gmmCheckboxPrefix+' (пишемо в консолі: localStorage.gmmCheckboxPrefix)');
console.log(ThisFileName +': Щоб побачити скільки у нас є елементів пишемо: localStorage.length; а їх у нас зараз = '+localStorage.length);
console.log(ThisFileName +': Щоб ВСЕ вичистити в localStorage - пишемо в консолі: localStorage.clear();');



// ОСНОВНИЙ ФУНКЦІОНАЛ ДЛЯ ЧЕКБОКСІВ!!! (не редагуати!)
// http://jsfiddle.net/JFlo/689rA/
// щоб побачити його логіку в роботі перейди на сайт - там все показано!
function getStorage(key_prefix) {
    // this function will return us an object with a "set" and "get" method
    // using either localStorage if available, or defaulting to document.cookie
    if (window.localStorage) {
        // use localStorage:
        return {
            set: function(id, data) {
                localStorage.setItem(key_prefix+id, data);
            },
            get: function(id) {
                return localStorage.getItem(key_prefix+id);
            }
        };
    } else {
        // use document.cookie:
        return {
            set: function(id, data) {
                document.cookie = key_prefix+id+'='+encodeURIComponent(data);
            },
            get: function(id, data) {
                var cookies = document.cookie, parsed = {};
                cookies.replace(/([^=]+)=([^;]*);?\s*/g, function(whole, key, value) {
                    parsed[key] = unescape(value);
                });
                return parsed[key_prefix+id];
            }
        };
    }
}

jQuery(function($) {
    //var $inputs = $('input.filter'), $checkall = $('input.checkAll'), $storedData = getStorage('gmmCheckboxes_'); // як префікс до всіх чекбоксів
    var $inputs = $('input.filter'), $checkall = $('input.checkAll'), $storedData = getStorage(localStorage.gmmCheckboxPrefix); // як префікс до всіх чекбоксів

    // Check/Uncheck All events
    $checkall.live('change', function(){
        
        // Change text for Check All box
        $(this).next().text( this.checked ? 'Uncheck All' : 'Check All');
        
        // Set Input Filter
        $inputs.attr('checked', this.checked ? 'checked' : ''); // This line not working in newer versions of jQuery
        // Toggle visibility of all results
        var $lis = $('.results > span').toggle(); // Думаю з допомогою цього виводити картинку яка буде наочно показувати що дана галочка включена. Або змінювати фон div в якому знаходиться чекбокс з описом.
        
        // Toggle checkboxes
        $lis.toggle($(this).is(':checked'));
    });        

    // Individual input events
    $inputs.live('change', function(){
        // Change text for Check All box
        $inputs.length === $inputs.find(':checked').length 
            ? $checkall.attr('checked', 'checked').next().text('Uncheck All') 
            : $checkall.removeAttr('checked').next().text( 'Check All' );
        
        $('.results .'+this.id).toggle($(this).is(':checked'));
        $storedData.set(this.id, $(this).is(':checked')?'checked':'not');
        //For each one checked
    }).each(function(){
        //var $lis = $j('.results > li').hide();
        //$lis.filter('.' + $j(this).attr('ID')).show();
        var val = $storedData.get(this.id);
        if (val == 'checked') $(this).attr('checked', 'checked');
        if (val == 'not') $(this).removeAttr('checked');
        if (val) $(this).trigger('change');
    });
});
// ОСНОВНИЙ ФУНКЦІОНАЛ ДЛЯ ЧЕКБОКСІВ!!! END

/*
console.log(ThisFileName +': DEBUG.3 START ');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmHint')+' = значення параметра gmmHint');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmLeftPanelWidth')+' = значення параметра gmmLeftPanelWidth');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmNavigationBarOptions')+' = значення параметра gmmNavigationBarOptions');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmStatTopUsers')+' = значення параметра gmmStatTopUsers');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmTopBar')+' = значення параметра gmmTopBar');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmHeader')+' = значення параметра gmmHeader');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmTopLoading')+' = значення параметра gmmTopLoading');
console.log(ThisFileName +': DEBUG.3 : '+ localStorage.getItem(localStorage.gmmCheckboxPrefix+'gmmAlert')+' = значення параметра gmmAlert');
console.log(ThisFileName +': DEBUG.3 END ');
*/

console.log(ThisFileName +': Закінчили читати '+ThisFileName);





