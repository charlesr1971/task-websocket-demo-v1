let websocket = null;

function initWebsocket() {
  websocket = new WebSocket($wsUri);
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

function onOpen(evt) {
  console.log('websocket.js: onOpen(): evt: ', evt);
}

function onMessage(evt) {
  console.log('websocket.js: onMessage(): evt: ', evt);
  //taskHub(evt.data);
  taskHub('{"id":"task-105","status":"updated"}');
  //taskHub('{"id":"task-100","name":"My Task 100","assignee":"john","created":"2021-06-08T09:39:26.341+0000","due":"2014-08-30T08:00:00.000+0000","followUp":"2014-08-25T08:00:00.000+0000","delegationState":"PENDING","description":"This have to be done soon","executionId":null,"owner":"alicia","parentTaskId":null,"priority":10,"processDefinitionId":null,"processInstanceId":null,"taskDefinitionKey":null,"caseExecutionId":null,"caseInstanceId":"aCaseInstanceId","caseDefinitionId":null,"suspended":false,"formKey":null,"tenantId":null,"status":"created"}');
}

function onError(evt) {
  console.log('websocket.js: onError(): evt: ', evt);
}

function doSend(message) {
  console.log('websocket.js: doSend(): message: ', message);
  websocket.send(message);
  // You can close communication at any time
  //websocket.close();
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


function createTask(obj) {
  const array = createTaskData(obj);
  console.log('websocket.js: createTask(): array: ', array);
  console.log('websocket.js: createTask(): taskDataUpdate: ', taskDataCreate);
  $initAgGrid.createAgGrid();
}

function updateTask(obj) {
  const array = updateTaskData(obj.id);
  console.log('websocket.js: updateTask(): array: ', array);
  console.log('websocket.js: updateTask(): taskDataUpdate: ', taskDataUpdate);
  $initAgGrid.updateAgGrid(obj.id);
}