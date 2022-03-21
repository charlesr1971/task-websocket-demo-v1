function xhrCreate(obj){
	
  var obj = (arguments[0] != null) ? arguments[0] : {};

  jQuery.ajax({
	method: 'POST',
	url: $restEndpointUri + '' + $restApiCreate,
	data: JSON.stringify(obj),
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrCreate(): success: data: ', data);
	  }
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
  
  jQuery.ajax({
	method: 'GET',
	url: $restEndpointUri + '' + $restApiRead + '/' + id,
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrRead(): success: data: ', data);
	  }
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrRead(): error: errorMessage: ', errorMessage);
	  }
	}
  });
  
}

function xhrPatch(id, obj){
	
  var id = (arguments[0] != null) ? arguments[0] : null;
  var obj = (arguments[1] != null) ? arguments[1] : {};
  
  jQuery.ajax({
	method: 'PATCH',
	url: $restEndpointUri + '' + $restApiRead + '/' + id,
	data: JSON.stringify({ 
	  obj 
	}),
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrPatch(): success: data: ', data);
	  }
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
  
  jQuery.ajax({
	method: 'PUT',
	url: $restEndpointUri + '' + $restApiUpdate,
	data: JSON.stringify({ 
	  obj 
	}),
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrUpdate(): success: data: ', data);
	  }
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
  
  jQuery.ajax({
	method: 'DELETE',
	url: $restEndpointUri + '' + $restApiDelete,
	data: JSON.stringify({ 
	  id
	}),
	contentType: 'application/json; charset=utf-8',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrDelete(): success: data: ', data);
	  }
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
	url: $restEndpointUri + '' + $restApiDelete + '/all',
	success: function(data){
	  if($debug){
		console.log('restapi.js: xhrDeleteAll(): success: data: ', data);
	  }
	},
	error: function(xhr, status, error){
	  var errorMessage = xhr.status + ': ' + xhr.statusText
	  if($debugErr){
		console.log('restapi.js: xhrDeleteAll(): error: errorMessage: ', errorMessage);
	  }
	}
  });

}