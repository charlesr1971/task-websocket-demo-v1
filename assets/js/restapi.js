function xhrCreate(obj){
	
  var obj = (arguments[0] != null) ? arguments[0] : {};
  
  if(!jQuery.isEmptyObject(obj)){
	if('update' in obj){
	  delete obj.update;
	  delete obj.deletes;
	}
	if('id' in obj){
	  obj.id = null;
	}
	if('status' in obj){
	  obj.status = 'CREATE';
	}
  }
  
  if($debug){
	console.log('restapi.js: xhrCreate(): obj: ', obj);
  }

  jQuery.ajax({
	method: 'POST',
	url: $restEndpointUri + '/' + $restApiCreate,
	data: JSON.stringify(obj),
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrCreate(): success: data: ', data);
	  }
	  $verb = 'create';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrCreate(): error: errorMessage: ', errorMessage);
	  }
	}
  });

}

function xhrRead(id){
	
  var id = (arguments[0] != null) ? arguments[0] : null;
  
  if($debug){
	console.log('restapi.js: xhrRead(): id: ', id);
  }
  
  jQuery.ajax({
	method: 'GET',
	url: $restEndpointUri + '/' + $restApiRead + '/' + id,
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrRead(): success: data: ', data);
	  }
	  $verb = 'read';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrRead(): error: errorMessage: ', errorMessage);
	  }
	}
  });
  
}

function xhrReadAll(){
	  
  jQuery.ajax({
	method: 'GET',
	url: $restEndpointUri + '/' + $restApiReadAll,
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrReadAll(): success: data: ', data);
	  }
	  if(!$initAgGrid){
		const agGridDiv = document.querySelector('#agGridDiv');
		$initAgGrid = new initAgGrid();
		$initAgGrid.init(agGridDiv);
		$verb = 'read all';
	  }
	  $taskData = data;
	  $taskData = addExtraColumnsToTaskData();
	  $initAgGrid.createAgGrid();
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrReadAll(): error: errorMessage: ', errorMessage);
	  }
	}
  });
  
}

function xhrPatch(id, obj){
	
  var id = (arguments[0] != null) ? arguments[0] : null;
  var obj = (arguments[1] != null) ? arguments[1] : {};
  
  if(!jQuery.isEmptyObject(obj)){
	if('update' in obj){
	  delete obj.update;
	  delete obj.deletes;
	}
	if('status' in obj){
	  obj.status = 'PATCHED';
	}
  }
  
  if($debug){
	console.log('restapi.js: xhrPatch(): id: ',id,' obj: ',obj);
  }
  
  let param = '';
  
  if(id && id !== ''){
	param = '/' + id;
  }
  
  jQuery.ajax({
	method: 'PATCH',
	url: $restEndpointUri + '/' + $restApiPatch + param,
	data: JSON.stringify({ 
	  obj 
	}),
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrPatch(): success: data: ', data);
	  }
	  $verb = 'patch';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrPatch(): error: errorMessage: ', errorMessage);
	  }
	}
  });
  
}

function xhrUpdate(obj){
	
  var obj = (arguments[0] != null) ? arguments[0] : {};
  
  if(!jQuery.isEmptyObject(obj)){
	if('update' in obj){
	  delete obj.update;
	  delete obj.deletes;
	}
	if('status' in obj){
	  obj.status = 'PUT';
	}
  }
  
  if($debug){
	console.log('restapi.js: xhrUpdate(): obj: ',obj);
  }
  
  jQuery.ajax({
	method: 'PUT',
	url: $restEndpointUri + '/' + $restApiUpdate,
	data: JSON.stringify(obj),
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrUpdate(): success: data: ', data);
	  }
	  $verb = 'update';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrUpdate(): error: errorMessage: ', errorMessage);
	  }
	}
  });
  
}

function xhrDelete(id){
	
  var id = (arguments[0] != null) ? arguments[0] : null;
  
  if($debug){
	console.log('restapi.js: xhrDelete(): id: ', id);
  }
  
  jQuery.ajax({
	method: 'DELETE',
	url: $restEndpointUri + '/' + $restApiDelete + '/' + id,
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrDelete(): success: data: ', data);
	  }
	  $verb = 'delete';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrDelete(): error: errorMessage: ', errorMessage);
	  }
	}
  });

}


function xhrDeleteAll(){

  
  jQuery.ajax({
	method: 'DELETE',
	url: $restEndpointUri + '/' + $restApiDeleteAll + '/all',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrDeleteAll(): success: data: ', data);
	  }
	  $verb = 'delete all';
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrDeleteAll(): error: errorMessage: ', errorMessage);
	  }
	}
  });

}