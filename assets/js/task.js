var uri;
var port;
var websocketSession;

function init() {
	
 var path = '/javaee7-websocket-basic/hello';
 var scheme = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
 var host = window.location.host; 
 
 uri = scheme + host + path;
 
 if (!websocketSession) {
  websocketSession = new WebSocket(uri);
 }
 
 websocketSession.onopen = function () {
  websocketSession.send("Opened");
  //alert('1. Connected to ' + uri);
 };
 
 websocketSession.onerror = function (e) {
  //alert('2. onerror to ' + uri);
 };
 
 websocketSession.onmessage = function (e) {
  //alert('3. onerror to ' + uri);
  //May use conditions to update UI based on value of data // var data = e.data;
   var reloadTrigger = document.getElementById('reloadTrigger');
   reloadTrigger.click();
 };
 
}

document.addEventListener("DOMContentLoaded", init, false);