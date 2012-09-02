RegisterLang();
lang_uk_UA = 
{
  lngLanguage: "Мова", // "Language"
  // ...
  lngExit: "Вихід" // "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("Українська", "uk_UA"));
  }
}
