// JavaScript Document
// gmmHint.js
var ThisFileName    = 'gmmHint';  // назва цього файла.
var ThisFileNameExt = 'js';       // тип цього файла. 

if (localStorage[[localStorage.gmmCheckboxPrefix]+ThisFileName] == "checked") {
  // якщо кнопка "gmmTopLoading" натиснута, то виконуємо наступне
  console.log(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');
  // alert(ThisFileName+'.'+ThisFileNameExt+': LOAD = TRUE!');


// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################
    
    console.log('Пишемо з файла '+ ThisFileName +': floathelp ');
    $('.floathelp').css({'margin-left':'100px'});
    

    // для теста-3 START
    window.setInterval( function() {
      console.log("Пишемо з файла gmmHint.js в КОНСОЛЬ - 3");
    }, 30);
    // для теста-3 END    
    
    // для теста-1 START
    window.onload = function() {
      window.setInterval( function() {
        console.log("Пишемо з файла gmmHint.js в КОНСОЛЬ - 1");
      }, 10);
    }
    // для теста-1 END
}


/*  це ми для теста робили //
   
$(function({    
  alert('STARTED gmmHint');     
  $('.floathelp').css({'margin-left':'100px'});

   setInterval(function(){
         if ($('.floathelp').size() > 0){
            alert(STARTED gmmHint 111222333);
         }
   },60000);
});

//  це ми для теста робили END */




// закоментив у 0018   
/*
$(function({    
  $('.floathelp').css({'margin-left':'100px'});

   setInterval(function(){
         if ($('.floathelp').size() > 0){
            $('.floathelp').css({'margin-left':'100px'});
         }
   },1000);
});
*/
// закоментив у 0018 END  
