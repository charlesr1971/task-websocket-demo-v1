
let websocket = null;

function initWebsocket() {
  websocket = new WebSocket($wsUri);
  if($debug){
	console.log('websocket.js: initWebsocket(): websocket: ', websocket);
  }
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
  if($debug){
	console.log('websocket.js: onOpen(): evt: ', evt);
  }
  $onOpenHasListener = true;
  showButtons();
  /*if(!buttonAdd || !buttonDeleteAll){
	onOpen(evt);
  }*/
}

function onMessage(evt) {
  if($debug){
	console.log('websocket.js: onMessage(): evt 1: ', evt);
  }
  xhrReadAll();
  if($debug){
	console.log('websocket.js: onMessage(): evt 2: ', evt);
  }
}

function onError(evt) {
  if($debug){
	console.log('websocket.js: onError(): evt: ', evt);
  }
}

function sendCreate() {
  const rand = randomIntInc(0,(taskDataCreate.length - 1));
  if($debug){
	console.log('websocket.js: sendCreate(): rand: ', rand);
  }
  const obj = taskDataCreate[rand];
  if($debug){
	console.log('websocket.js: sendCreate(): obj: ', obj);
  }
  const array = [obj];
  if(Array.isArray(array) && array.length > 0){
	if($debug){
	  console.log('websocket.js: sendCreate(): array: ', array);
	}
	xhrCreate(array[0]);
  }
}

function sendUpdate(id) {
  const array = readTaskData(id);
  if(Array.isArray(array) && array.length > 0){
	if($debug){
	  console.log('websocket.js: sendUpdate(): array: ', array);
	}
	xhrUpdate(array[0]);
  }
}

function sendDelete(id) {
  const array = readTaskData(id);
  if(Array.isArray(array) && array.length > 0){
	if($debug){
	  console.log('websocket.js: sendDelete(): array: ', array);
	}
	xhrDelete(id);
  }
}

function sendDeleteAll() {
  if($debug){
	console.log('websocket.js: sendDeleteAll()');
  }
  xhrDeleteAll();
}