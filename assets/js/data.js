const taskDataCreate = [
  {
    id: 'task-100',
    name: 'My Task 100',
    assignee: 'john',
    created: '2021-06-08T09:39:26.341+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This have to be done soon',
    executionId: null,
    owner: 'alicia',
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'created'
  },
  {
    id: 'task-101',
    name: 'My Task 101',
    assignee: 'peter',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This have to be done one day',
    executionId: null,
    owner: 'larry',
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'created'
  },
  {
    id: 'task-102',
    name: 'My Task 102',
    assignee: 'alan',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This have to be done in the near future',
    executionId: null,
    owner: 'andrew',
    parentTaskId: null,
    priority: 20,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'created'
  },
  {
    id: 'task-103',
    name: 'My Task 103',
    assignee: 'william',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This have to be done never',
    executionId: null,
    owner: 'patricia',
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'created'
  },
  {
    id: 'task-104',
    name: 'My Task 104',
    assignee: 'charles',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This have to be done atonce',
    executionId: null,
    owner: 'mary',
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'created'
  }
];

const taskDataUpdate = [
  {
    id: 'task-105',
    name: 'My Task 105',
    assignee: 'jimmy',
    created: '2021-06-08T09:39:26.341+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This has to be done next week',
    executionId: null,
    owner: 'james',
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  },
  {
    id: 'task-106',
    name: 'My Task 106',
    assignee: 'laura',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This has to be done in two days time',
    executionId: null,
    owner: 'perry',
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  },
  {
    id: 'task-107',
    name: 'My Task 107',
    assignee: 'robert',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This has to be done now',
    executionId: null,
    owner: 'david',
    parentTaskId: null,
    priority: 20,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  },
  {
    id: 'task-108',
    name: 'My Task 108',
    assignee: 'patricia',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This has to be done tommorrow',
    executionId: null,
    owner: 'francine',
    parentTaskId: null,
    priority: 30,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  },
  {
    id: 'task-109',
    name: 'My Task 109',
    assignee: 'edward',
    created: '2021-06-08T11:01:02.901+0000',
    due: '2014-08-30T08:00:00.000+0000',
    followUp: '2014-08-25T08:00:00.000+0000',
    delegationState: 'PENDING',
    description: 'This has to be done in 4 weeks time',
    executionId: null,
    owner: 'vicky',
    parentTaskId: null,
    priority: 10,
    processDefinitionId: null,
    processInstanceId: null,
    taskDefinitionKey: null,
    caseExecutionId: null,
    caseInstanceId: 'aCaseInstanceId',
    caseDefinitionId: null,
    suspended: false,
    formKey: null,
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  }
];

function createTaskData(obj) {
  if(!('update' in obj)){
	obj.update = '<i class="material-icons">update</i>';
  }
  taskDataUpdate.push(obj);
  const array = taskDataUpdate;
  return array;
}

function readTaskData(id) {
  const array = taskDataUpdate.filter( (obj) => {
	return obj.id.toLowerCase() === id.toLowerCase();
  });
  return array;
}

function updateTaskData(id) {
  const array = taskDataUpdate.map( (obj) => {
	if(obj.id.toLowerCase() === id.toLowerCase()){
	  obj.status = 'updated';
	}
	return obj;
  });
  return array;
}

const columnCentered = {
  headerClass: 'text-center',
  cellStyle: {
    textAlign: 'center',
    // Add the following if you are using .ag-header-cell-menu-button 
    // and column borders are set to none.
    // marginLeft: '-16px'
  }
}

function getObjectkeys(obj) {
  return Object.keys(obj);
}

function createAgGridColumnDefs(obj) {
  const keys = getObjectkeys(obj[0]);
  const columnDefs = [];
  /*const rows = keys.map( (key) => {
	columnDefs.push({
	  field: key
	});
  });*/
  columnDefs.push({
	field: 'id',
	suppressSizeToFit: false
  });
  columnDefs.push({
	field: 'name',
	suppressSizeToFit: false
  });
  columnDefs.push({
	field: 'assignee',
	suppressSizeToFit: false
  });
  columnDefs.push({
	field: 'created',
	suppressSizeToFit: false
  });
  columnDefs.push({
	field: 'update',
	cellRenderer: function(params) {
	  return '<a href="javascript:void(0);" onclick="sendUpdate(\'' + params.data.id + '\')">' + params.value + '</a>'
	},
	//cellStyle: {top: '8px'},
	//headerName: 'Update',
	headerClass: 'update-header-text-center',
	cellStyle: {
	  textAlign: 'center',
	  top: '8px'
	},
	suppressSizeToFit: false
  });
  columnDefs.push({
	field: 'status',
	headerClass: 'update-header-text-center',
	cellStyle: {
	  textAlign: 'center'
	},
	suppressSizeToFit: false
  });
  return columnDefs;
}

function initAgGrid() {
  return {
	gridOptions: null,
	init: function(el) {
	  const rowData = taskDataUpdate;
	  this.gridOptions = {
		getRowId: params => params.data.id,
		columnDefs: createAgGridColumnDefs(taskDataUpdate),
		rowData: rowData,
		pagination: true,
		paginationPageSize: 4,
		defaultColDef: {
		  resizable: true,
		},
		onGridSizeChanged: (params) => {
		  console.log('data.js: initAgGrid(): onGridSizeChanged(): params: ', params);
		},
		onColumnResized: (params) => {
		  console.log('data.js: initAgGrid(): onColumnResized(): params: ', params);
		}
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
		'tenantId',
		'update'
	  ];
	  const grid = new agGrid.Grid(el, this.gridOptions);
	  this.gridOptions.onGridReady = () => {
		this.gridOptions.api.sizeColumnsToFit();
		const ag20 = document.querySelector('#ag-20');
		if(ag20){
		  const addButton = document.createElement('a'); 
		  addButton.setAttribute('class','mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect button-add');
		  addButton.setAttribute('href','javascript:void(0)');
		  addButton.setAttribute('onclick','sendCreate()');
		  const newContent = document.createTextNode('Add');
		  addButton.appendChild(newContent);
		  ag20.appendChild(addButton);
		  componentHandler.upgradeDom();
		}
	  }
	  function autoSizeAll() {
		this.gridOptions.api.sizeColumnsToFit();
	  }
	  window.addEventListener("resize", autoSizeAll);
	  const readTask = readTaskData('task-109');
	  console.log('data.js: initAgGrid(): readTask: ', readTask);
	},
	createAgGrid: function () {
	  this.gridOptions.api.setRowData(taskDataUpdate);
	},
	updateAgGrid: function (id) {
	  console.log('data.js: updateAgGrid(): id: ', id);
	  const rowNode = this.gridOptions.api.getRowNode(id);
	  console.log('data.js: updateAgGrid(): rowNode: ', rowNode);
	  rowNode.setDataValue('status', 'updated');
	}
  }
}
