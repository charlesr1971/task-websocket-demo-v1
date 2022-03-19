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
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
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
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
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
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
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
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
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
    tenantId: null,
	update: '<i class="material-icons">update</i>',
	status: 'pending'
  }
];

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

function initAgGrid(el) {
	
  const rowData = taskData;
  
  const gridOptions = {
	columnDefs: createAgGridColumnDefs(taskData),
	rowData: rowData,
	pagination: true,
	paginationPageSize: 4,
	defaultColDef: {
	  resizable: true,
	},
	onGridSizeChanged: (params) => {
	  console.log(params);
	},
	onColumnResized: (params) => {
	  console.log(params);
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
  
  const grid = new agGrid.Grid(el, gridOptions);
  
  gridOptions.onGridReady = () => {
	gridOptions.api.sizeColumnsToFit();
  }
  
  function autoSizeAll() {
	/*const allColumnIds = [];
	gridOptions.columnApi.getAllColumns().forEach((column) => {
	  allColumnIds.push(column.getId());
	});
  
	gridOptions.columnApi.autoSizeColumns(allColumnIds, true);*/
	gridOptions.api.sizeColumnsToFit();
  }
  
  window.addEventListener("resize", autoSizeAll);

}
