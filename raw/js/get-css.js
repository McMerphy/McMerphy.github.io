function include_css(css_file, media) {
	var css;
  var html_doc = document.getElementsByTagName('head')[0];
  css = document.createElement('link');
  css.setAttribute('rel', 'stylesheet');
  css.setAttribute('type', 'text/css');
  css.setAttribute('href', css_file);
  if (media) {
  	css.setAttribute('media', media);
  }
  html_doc.appendChild(css);
};


window.onload = function() {
	include_css('css/mobile.min.css', 'screen and (max-width:480px)');
	include_css('//fonts.googleapis.com/css?family=Open+Sans:400,700');
}