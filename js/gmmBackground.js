// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ThisFileName    = 'gmmBackground';  // назва цього файла.
var ThisFileNameExt = 'js';             // тип цього файла. 

// Даний скрипт відпрацьовує у бекграунді 1 раз! при старті додатку (переписаний із "background_pageAction.js" який видалений з папки починаючи з версії 0014)
function checkForValidUrl(tabId, changeInfo, tab) {     // Створюємо функкцію "checkForValidUrl" якою перевіряємо на валідність УРЛ
  if (tab.url.indexOf('google.com/mapmaker') > -1) {    // якщо фраза 'google.com/mapmaker' iзнайдена в УРЛі...
    chrome.pageAction.show(tabId);                      // ... показуємо page action. (в нашому випадку іконку mapmaker, в рядку там де підходить УРЛ)
  }
};
chrome.tabs.onUpdated.addListener(checkForValidUrl);    // переглядає зміни які віlбуваються в УРЛі у буль якій з вкладок, РЕАЛТАЙМ щоб застосувати функцію "checkForValidUrl" 
