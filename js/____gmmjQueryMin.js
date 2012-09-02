// ЕКСПЕРИМЕНТ 0045 - ВИЗНАЧЕННЯ НАЗВИ ФАЙЛА
function getThisFileName(ThisFileId) {
  var ThisFileSRC = document.getElementById(ThisFileId).getAttribute("src");
  return ThisFileSRC.substr(ThisFileSRC.lastIndexOf('/')+1,ThisFileSRC.lastIndexOf('.')- ThisFileSRC.lastIndexOf('/')-1);
}
//ThisFileSRC = getThisFileName("sc_gmmjQueryMin"); //    "sc_" AKA "script_checker_" WORK!
ThisFileSRC = getThisFileName("sc_"); //    "sc_" AKA "script_checker_"
var ThisFileName    = ThisFileSRC;          // назва цього файла.
// ЕКСПЕРИМЕНТ 0045 - ВИЗНАЧЕННЯ НАЗВИ ФАЙЛА END


localStorage.gmmjQueryMin;
console.log(ThisFileName +': START : localStorage.gmmjQueryMin = '+ localStorage.gmmjQueryMin);

localStorage['gmmjQueryMin'] = 1111111;

// закидаємо "jQuery" в ЛС

localStorage.gmmjQueryMin;
console.log(ThisFileName +': END   : localStorage.gmmjQueryMin = '+ localStorage.gmmjQueryMin);

