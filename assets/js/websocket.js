
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
  taskHub(evt.data);
  //taskHub('{"id":"task-105","status":"updated"}');
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
  if(!$useRestApi){
	const obj = {
	  id: '',
	  status: 'created'
	};
	console.log('websocket.js: sendCreate(): obj: ', obj);
	websocket.send(JSON.stringify(obj));
  }
  else{
	/*const id = 'task-100';
	const array = readTaskDataCreate(id);*/
	const rand = randomIntInc(0,(taskDataCreate.length - 1));
	console.log('websocket.js: sendCreate(): rand: ', rand);
	const obj = taskDataCreate[rand];
	console.log('websocket.js: sendCreate(): obj: ', obj);
	const array = [obj];
	if(Array.isArray(array) && array.length > 0){
	  console.log('websocket.js: sendCreate(): array: ', array);
	  xhrCreate(array[0]);
	}
  }
}

function sendUpdate(id) {
  if(!$useRestApi){
	const obj = {
	  id,
	  status: 'updated'
	};
	console.log('websocket.js: sendUpdate(): obj: ', obj);
	websocket.send(JSON.stringify(obj));
  }
  else{
	const array = readTaskData(id);
	if(Array.isArray(array) && array.length > 0){
	  console.log('websocket.js: sendUpdate(): array: ', array);
	  xhrUpdate(array[0])
	}
  }
}

function taskHub(message) {
  try {
	const obj = JSON.parse(message);
	console.log('websocket.js: taskHub(): obj: ', obj);
	if(!jQuery.isEmptyObject(obj) && 'id' in obj && 'status' in obj){
	  if(obj.status === 'created'){
		createTask(obj);
	  }
	  else{
		updateTask(obj);
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