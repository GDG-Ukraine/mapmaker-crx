RegisterLang();
lang_ru_RU = 
{
  lngLanguage: "Язык", // "Language"
  //...
  lngExit: "Выход" // "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("Русский", "ru_RU"));
  }
}
