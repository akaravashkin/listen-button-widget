!function(){function i(e,t){t=t||{};for(var n=e||document.getElementsByClassName("listen-button-widget"),i=0;i<n.length;i++){var o=n[i];if(o.firstChild)return!1;var s=t.src||o.dataset.src,a=document.createElement("button");a.className="lbw-listen-button",a.innerHTML=t.text||o.dataset.text||"Listen",a.addEventListener("click",function(e,t){var n,i,o,s;this.style="width: "+this.clientWidth+"px",this.innerHTML='<div class="lbw-spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',n=e,i=function(e){t.innerHTML='<a class="lbw-phone-number" href="tel:'+e+'">'+e+"</a>"},o=function(){t.innerHTML='<div class="lbw-error">Error... Sorry!</div>'},(s=new XMLHttpRequest).open("POST","https://qa-dialinstream.int/create",!0),s.setRequestHeader("Content-type","application/json"),s.onreadystatechange=function(){if(4===s.readyState)if(200===s.status){var e=JSON.parse(s.responseText);i(((t=e.phonenumber)&&(t=t.match(/^1/)?"("+(t=t.substring(1)).substr(0,3)+") "+t.substr(3,3)+" "+t.substr(6,4):"+"+t),t))}else o();var t},s.send(JSON.stringify({url:n}))}.bind(a,s,o),!1),o.appendChild(a)}}var e=document.createElement("style");e.innerHTML='  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:700");  button.lbw-listen-button{font-family: "Roboto Slab", serif;height:32px;background-color: #FF5A36;color: #fff;font-size: 14px;line-height: 32px;margin: 0 5px;border-radius: 100px;padding: 0 20px;text-align: center;border:0;cursor:pointer;}  button.lbw-listen-button:focus{outline: 0;}  button.lbw-listen-button:active{outline: 0; box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);}  a.lbw-phone-number{font-family: "Roboto Slab", serif; font-size: 22px;color: #FF5A36;text-decoration:none}  .lbw-loading{color: #333;}  .lbw-error{color: #f00;}  .lbw-spinner {width: 42px; margin: 0 auto; text-align: center; position: relative; top: 2px;}  .lbw-spinner > div {width: 14px;  height: 14px;  background-color: #fffc;border-radius: 100%;  display: inline-block;  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;  animation: sk-bouncedelay 1.4s infinite ease-in-out both;}  .lbw-spinner .bounce1 {-webkit-animation-delay: -0.32s;  animation-delay: -0.32s;}  .lbw-spinner .bounce2 {-webkit-animation-delay: -0.16s;  animation-delay: -0.16s;}  @-webkit-keyframes sk-bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0) }40% { -webkit-transform: scale(1.0) }}  @keyframes sk-bouncedelay {0%, 80%, 100% { -webkit-transform: scale(0);    transform: scale(0);  } 40% { -webkit-transform: scale(1.0);    transform: scale(1.0);  }}',document.documentElement.appendChild(e),document.addEventListener("DOMContentLoaded",function(){i()}),window.ListenButtonWidget={init:function(e,t){var n=document.querySelectorAll(e||".listen-button-widget");n.length&&i(n,t)}}}();