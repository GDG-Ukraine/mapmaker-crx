RegisterLang();
lang_ru_RU = 
{
  lngLanguage: "язык", // "Language"
  //...
  lngExit: "¬ыход" // "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("–усский", "ru_RU"));
  }
}
