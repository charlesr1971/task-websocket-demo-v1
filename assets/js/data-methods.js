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

function readTaskDataCreate(id) {
  const array = taskDataCreate.filter( (obj) => {
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
    textAlign: 'center'
  }
}

function getObjectkeys(obj) {
  return Object.keys(obj);
}

function createAgGridColumnDefs(obj) {
  const keys = getObjectkeys(obj[0]);
  const columnDefs = [];
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
		  console.log('data-methods.js initAgGrid(): onGridSizeChanged(): params: ', params);
		  if('api' in this.gridOptions){
			this.gridOptions.api.sizeColumnsToFit();
		  }
		},
		onColumnResized: (params) => {
		  console.log('data-methods.js initAgGrid(): onColumnResized(): params: ', params);
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
		console.log('data-methods.js initAgGrid(): onGridReady()');
	  }
	},
	createAgGrid: function () {
	  const array = sortArrayOfObjects(taskDataUpdate,"id","asc","text");
	  this.gridOptions.api.setRowData(array);
	},
	updateAgGrid: function (id) {
	  console.log('data-methods.js updateAgGrid(): id: ', id);
	  const rowNode = this.gridOptions.api.getRowNode(id);
	  console.log('data-methods.js updateAgGrid(): rowNode: ', rowNode);
	  rowNode.setDataValue('status', 'updated');
	}
  }
}