console.log("Hello world");

var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();
xhr.withCredentials = true;

// (2) запрос на другой домен :)
xhr.open('POST', 'http://minsk.gov.by/ru/zags/99', true);

xhr.onload = function() {
  alert( this.responseText );
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();