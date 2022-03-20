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
  //taskHub(evt.data);
  taskHub('{"id":"task-105","status":"updated"}');
  //taskHub('{"id":"task-100","name":"My Task 100","assignee":"john","created":"2021-06-08T09:39:26.341+0000","due":"2014-08-30T08:00:00.000+0000","followUp":"2014-08-25T08:00:00.000+0000","delegationState":"PENDING","description":"This have to be done soon","executionId":null,"owner":"alicia","parentTaskId":null,"priority":10,"processDefinitionId":null,"processInstanceId":null,"taskDefinitionKey":null,"caseExecutionId":null,"caseInstanceId":"aCaseInstanceId","caseDefinitionId":null,"suspended":false,"formKey":null,"tenantId":null,"status":"created"}');
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

function sendCreate() {
  const obj = {
	id: '',
	status: 'created'
  };
  console.log('websocket.js: sendCreate(): obj: ', obj);
  websocket.send(JSON.stringify(obj));
}

function sendUpdate(id) {
  const obj = {
	id,
	status: 'updated'
  };
  console.log('websocket.js: sendUpdate(): obj: ', obj);
  websocket.send(JSON.stringify(obj));
}

function taskHub(message) {
  try {
	const obj = JSON.parse(message);
	console.log('websocket.js: taskHub(): obj: ', obj);
	if(!jQuery.isEmptyObject(obj) && 'id' in obj && 'status' in obj){
	  if(obj.status === 'updated'){
		updateTask(obj);
	  }
	  else{
		createTask(obj);
	  }
	}
  }
  catch(e) {
	console.log('websocket.js: taskHub(): error: ', e);
  }
}

/*function updateTask(message) {
  try {
	const obj = JSON.parse(message);
	console.log('websocket.js: updateTask(): obj: ', obj);
	if(!jQuery.isEmptyObject(obj) && 'id' in obj && 'status' in obj){
	  const array = updateTaskData(obj.id);
	  console.log('websocket.js: updateTask(): array: ', array);
	  console.log('websocket.js: updateTask(): taskDataUpdate: ', taskDataUpdate);
	  updateAgGrid(obj.id);
	}
  }
  catch(e) {
	console.log('websocket.js: updateTaskData(): error: ', e);
  }
}*/

function createTask(obj) {
  const array = createTaskData(obj);
  console.log('websocket.js: createTask(): array: ', array);
  console.log('websocket.js: createTask(): taskDataUpdate: ', taskDataCreate);
  //createAgGrid(obj.id);
}

function updateTask(obj) {
  const array = updateTaskData(obj.id);
  console.log('websocket.js: updateTask(): array: ', array);
  console.log('websocket.js: updateTask(): taskDataUpdate: ', taskDataUpdate);
  updateAgGrid(obj.id);
}