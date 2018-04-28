/* globals window, document, XMLHttpRequest */

(function() {
  function formatPhoneNumber(numStr) {
    if (numStr) {
      if (numStr.match(/^1/)) {
        numStr = numStr.substring(1);
        numStr = '(' + numStr.substr(0, 3) + ') ' + numStr.substr(3, 3) + ' ' + numStr.substr(6, 4);
      } else {
        numStr = '+' + numStr;
      }
    }

    return numStr;
  }

  function loadPhoneNumber(mediaURL, cbSuccess, cbError) {
    var url = 'https://qa-dialinstream.int/create';
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);
          cbSuccess(formatPhoneNumber(data.phonenumber));
        } else {
          cbError();
        }
      }
    };

    request.send(JSON.stringify({ url: mediaURL }));
  }

  function init(optWidgetNodes, optConfig) {
    optConfig = optConfig || {};

    // I use getElementsByClassName by default instead of querySelectorAll because I'm not sure about browser support
    // MDN and caniuse give different results
    var widgetNodes = optWidgetNodes || document.getElementsByClassName('listen-button-widget');

    for (var i = 0; i < widgetNodes.length; i++) {
      var parentNode = widgetNodes[i];

      // prevent double render
      if (parentNode.firstChild) {
        return false;
      }

      var source = optConfig.src || parentNode.dataset.src;

      var button = document.createElement('button');
      button.className = 'lbw-listen-button';
      button.innerHTML = optConfig.text || parentNode.dataset.text || 'Listen';
      button.addEventListener('click', function(mediaURL, container) {
        // fix the width for the loader
        this.style = 'width: ' + this.clientWidth + 'px';

        this.innerHTML = '<div class="lbw-spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';

        loadPhoneNumber(mediaURL,
          // success
          function(phoneNumber) {
            container.innerHTML = '<a class="lbw-phone-number" href="tel:' + phoneNumber + '">' + phoneNumber + '</a>';
          },
          // fail
          function() {
            container.innerHTML = '<div class="lbw-error">Error... Sorry!</div>';
          }
        );
      }.bind(button, source, parentNode), false);

      parentNode.appendChild(button);
    }
  }

  var cssTag = document.createElement('style');
  cssTag.innerHTML = '\
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:700");\
  button.lbw-listen-button{font-family: "Roboto Slab", serif;height:32px;background-color: #FF5A36;color: #fff;font-size: 14px;line-height: 32px;margin: 0 5px;border-radius: 100px;padding: 0 20px;text-align: center;border:0;cursor:pointer;}\
  button.lbw-listen-button:focus{outline: 0;}\
  button.lbw-listen-button:active{outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);}\
  a.lbw-phone-number{font-family: "Roboto Slab", serif; font-size: 22px;color: #FF5A36;text-decoration:none}\
  .lbw-loading{color: #333;}\
  .lbw-error{color: #f00;}\
  .lbw-spinner {width: 42px; margin: 0 auto; text-align: center; position: relative; top: 2px;}\
  .lbw-spinner > div {width: 14px;  height: 14px;  background-color: #fffc;border-radius: 100%;  display: inline-block;  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;  animation: sk-bouncedelay 1.4s infinite ease-in-out both;}\
  .lbw-spinner .bounce1 {-webkit-animation-delay: -0.32s;  animation-delay: -0.32s;}\
  .lbw-spinner .bounce2 {-webkit-animation-delay: -0.16s;  animation-delay: -0.16s;}\
  @-webkit-keyframes sk-bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0) }40% { -webkit-transform: scale(1.0) }}\
  @keyframes sk-bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0);    transform: scale(0);  } 40% { -webkit-transform: scale(1.0);    transform: scale(1.0);  }}';
  document.documentElement.appendChild(cssTag);

  document.addEventListener('DOMContentLoaded', function() { init(); });

  window.ListenButtonWidget = {
    // programmatic use
    init: function(optSelector, optConfig) {
      // querySelectorAll to allow advanced user to use any selector
      var customWidgetNodes = document.querySelectorAll(optSelector || '.listen-button-widget');
      if (customWidgetNodes.length) {
        init(customWidgetNodes, optConfig);
      }
    }
  };
}());
