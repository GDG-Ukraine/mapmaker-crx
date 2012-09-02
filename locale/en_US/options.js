RegisterLang();
lang_en_US = 
{
  lngLanguage: "Language",
  // ...
  lngExit: "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("English", "en_US"));
  }
}
