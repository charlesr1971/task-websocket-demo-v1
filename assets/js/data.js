const taskData = [
  {
    id: "task-100",
    name: "My Task 100",
    assignee: "john",
    created: "2021-06-08T09:39:26.341+0000",
    due: "2014-08-30T08:00:00.000+0000",
    followUp: "2014-08-25T08:00:00.000+0000",
    delegationState: "PENDING",
    description: "This have to be done soon",
    executionId: null,
    owner: "alicia",
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: "aCaseInstanceId",
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null
  },
  {
    id: "task-101",
    name: "My Task 101",
    assignee: "peter",
    created: "2021-06-08T11:01:02.901+0000",
    due: "2014-08-30T08:00:00.000+0000",
    followUp: "2014-08-25T08:00:00.000+0000",
    delegationState: "PENDING",
    description: "This have to be done one day",
    executionId: null,
    owner: "larry",
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: "aCaseInstanceId",
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null
  },
  {
    id: "task-102",
    name: "My Task 102",
    assignee: "alan",
    created: "2021-06-08T11:01:02.901+0000",
    due: "2014-08-30T08:00:00.000+0000",
    followUp: "2014-08-25T08:00:00.000+0000",
    delegationState: "PENDING",
    description: "This have to be done in the near future",
    executionId: null,
    owner: "andrew",
    parentTaskId: null,
    priority: 20,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: "aCaseInstanceId",
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null
  },
  {
    id: "task-103",
    name: "My Task 103",
    assignee: "william",
    created: "2021-06-08T11:01:02.901+0000",
    due: "2014-08-30T08:00:00.000+0000",
    followUp: "2014-08-25T08:00:00.000+0000",
    delegationState: "PENDING",
    description: "This have to be done never",
    executionId: null,
    owner: "patricia",
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: "aCaseInstanceId",
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null
  },
  {
    id: "task-104",
    name: "My Task 104",
    assignee: "charles",
    created: "2021-06-08T11:01:02.901+0000",
    due: "2014-08-30T08:00:00.000+0000",
    followUp: "2014-08-25T08:00:00.000+0000",
    delegationState: "PENDING",
    description: "This have to be done atonce",
    executionId: null,
    owner: "mary",
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: "aCaseInstanceId",
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null
  }
];

function getObjectkeys(obj) {
  return Object.keys(obj);
}

function createAgGridColumnDefs(obj) {
  const keys = getObjectkeys(obj[0]);
  const columnDefs = [];
  const rows = keys.map( (key) => {
	columnDefs.push({
	  field: key
	});
  });
  return columnDefs;
}

/*function createAgGridRowData(obj) {
  const keys = getObjectkeys(obj[0]);
  const rows = [];
  obj.map( (item) => {
	  
	keys.map( (key) => {
	  columnDefs.push({
		key: key
	  });
	});
  });
  return columnDefs;
}*/

function initAgGrid(el) {
	
  const rowData = taskData;
  
  const gridOptions = {
	columnDefs: createAgGridColumnDefs(taskData),
	rowData: rowData
  };
  
  const hiddenColumns = [
	'due',
	'followUp',
	'delegationState',
    'description',
    'executionId',
    'owner',
    'parentTaskId',
    'priority',
    'processDefinitionId',
    'processInstanceId',
    'taskDefinitionKey',
    'caseExecutionId',
    'caseInstanceId',
    'caseDefinitionId',
    'suspended',
    'formKey',
    'tenantId'
  ];
  
  const grid = new agGrid.Grid(el, gridOptions);
  
  gridOptions.onGridReady = () => {
	/*...snip
	this.columnApi = that.gridOptions.columnApi;
	this.gridOptions.columnApi.setColumnVisible('REQCONTEXT', false);*/
	gridOptions.columnApi.setColumnsVisible(hiddenColumns, false);
  }
  
  //console.log('data.js: columnDefs: ', columnDefs);

}


/*const columnDefs = [
  { field: "make" },
  { field: "model" },
  { field: "price" }
];

// specify the data
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];*/
