// JavaScript Document
// gmmGoogleAnalytics.js
var ThisFileName = 'gmmGoogleAnalytics.js'; // назва цього файла. 

// google-analytics-ver2 START
// READ MORE : http://code.google.com/chrome/extensions/trunk/tut_analytics.html
console.log(ThisFileName+' google-analytics START');
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-476439-4']);
_gaq.push(['_trackPageview']);
_gaq.push(['_trackPageLoadTime']); // швидкість завантаження
// _gaq.push(['_trackSocial', socialNetwork, socialAction]);
// _gaq.push(['_setDomainName', 'google.com']);
_gaq.push(['_setDomainName', '.google.com/mapmaker']);
_gaq.push(['_setDomainName', '.google.com/mapmaker/pulse']);
_gaq.push(['_setDomainName', '.sites.google.com/site/mapmakerpedia/']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
console.log(ThisFileName+' google-analytics END');
// google-analytics-ver2 END

// #################   ВСЕ ЩО ВИЩЕ - ГАРАНОТВАНО ПРАЦЮЄ!!!  ####################

