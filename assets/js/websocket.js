let websocket = null;

function initWebsocket() {
  //output = document.getElementById("output");
  websocket = new WebSocket(global_wsUri);
  console.log('websocket.js: initWebsocket(): websocket: ', websocket);
  websocket.onopen = function(evt) {
	  onOpen(evt)
  };
  websocket.onmessage = function(evt) {
	  onMessage(evt)
  };
  websocket.onerror = function(evt) {
	  onError(evt)
  };
}

function send_message() {
  websocket = new WebSocket(global_wsUri);
  websocket.onopen = function(evt) {
	  onOpen(evt)
  };
  websocket.onmessage = function(evt) {
	  onMessage(evt)
  };
  websocket.onerror = function(evt) {
	  onError(evt)
  };
}

function onOpen(evt) {
  //writeToScreen("Connected to Endpoint!");
  //doSend(textID.value);
  console.log('websocket.js: onOpen(): evt: ', evt);
}

function onMessage(evt) {
  //writeToScreen("Message Received: " + evt.data);
  console.log('websocket.js: onMessage(): evt: ', evt);
  //updateTaskData(evt.data);
  updateTask('{"id":"task-105","status":"updated"}');
}

function onError(evt) {
  //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  console.log('websocket.js: onError(): evt: ', evt);
}

function doSend(message) {
  //writeToScreen("Message Sent: " + message);
  console.log('websocket.js: doSend(): message: ', message);
  websocket.send(message);
  // You can close communication at any time
  //websocket.close();
}

function writeToScreen(message) {
  /*var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
   
  output.appendChild(pre);*/
}

function sendUpdate(id) {
  const obj = {
	id,
	status: 'updated'
  };
  console.log('websocket.js: sendUpdate(): obj: ', obj);
  websocket.send(JSON.stringify(obj));
}

function updateTask(message) {
  try {
	const obj = JSON.parse(message);
	console.log('websocket.js: updateTaskData(): obj: ', obj);
	if(!jQuery.isEmptyObject(obj) && 'id' in obj && 'status' in obj){
	  const array = updateTaskData(obj.id);
	  console.log('websocket.js: updateTaskData(): array: ', array);
	  console.log('websocket.js: updateTaskData(): taskDataUpdate: ', taskDataUpdate);
	  updateAgGrid(obj.id);
	}
  }
  catch(e) {
	console.log('websocket.js: updateTaskData(): error: ', e);
  }
}