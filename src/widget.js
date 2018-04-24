/* globals document, XMLHttpRequest */

(function() {
  function loadPhoneNumber(mediaURL, cb) {
    var url = 'https://httpbin.org/get?q=' + encodeURIComponent(mediaURL);
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status === 200) {
        // var data = JSON.parse(request.responseText);
        // cb(data);
        cb('(999) 999 9999');
      }
    };
    request.send();
  }

  var widgetNodes = document.getElementsByClassName('listen-button-widget');

  for (var i = 0; i < widgetNodes.length; i++) {
    var parentNode = widgetNodes[i];
    var source = parentNode.dataset.src;

    var button = document.createElement('button');
    button.className = 'lbw-listen-button';
    button.innerHTML = parentNode.dataset.text || 'Listen';
    button.addEventListener('click', function(mediaURL, container) {
      loadPhoneNumber(mediaURL, function(phoneNumber) {
        container.innerHTML = '<a class="lbw-phone-number" href="tel:' + phoneNumber + '">' + phoneNumber + '</a>';
      });
    }.bind(this, source, parentNode), false);

    parentNode.appendChild(button);
  }

  var cssTag = document.createElement('style');
  cssTag.innerHTML = '\
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:700");\
  .lbw-listen-button{font-family: "Roboto Slab", serif;background-color: #FF5A36;color: #fff;font-size: 14px;line-height: 32px;margin: 0 5px;border-radius: 100px;padding: 0 20px;text-align: center;border:0;cursor:pointer;}\
  .lbw-listen-button:focus{outline: 0;}\
  .lbw-listen-button:active{outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);}\
  .lbw-phone-number{font-family: "Roboto Slab"; font-size: 22px;color: #FF5A36;text-decoration:none}';
  document.documentElement.appendChild(cssTag);
}());
