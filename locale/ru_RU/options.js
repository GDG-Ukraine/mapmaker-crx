RegisterLang();
lang_ru_RU = 
{
  lngLanguage: "����", // "Language"
  //...
  lngExit: "�����" // "Exit"
}

function RegisterLang()
{
  var ctrl = document.getElementById("language");

  if(ctrl != null)
  {
    ctrl.add(createOption("�������", "ru_RU"));
  }
}
