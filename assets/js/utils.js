function sortArrayOfObjects(array,key,sortOrder,sortType){
  var array = (arguments[0] != null) ? arguments[0] : [];
  var key = (arguments[1] != null) ? arguments[1] : "";
  var sortOrder = (arguments[2] != null) ? arguments[2] : "asc";
  var sortType = (arguments[3] != null) ? arguments[3] : "text";
  var temp = array.sort(function(a,b){
	if(sortType.toLowerCase() == "text"){
	  var a = a[key].toLowerCase();
	  var b = b[key].toLowerCase();
	  var c = 0;
	  if (a > b) {
		c = 1;
	  } 
	  else if (a < b) {
		c = -1;
	  }
	  if(sortOrder.toLowerCase() == "asc"){
		return c;
	  }
	  else{
		return c * -1;
	  }
	}
	else{
	  if(sortOrder.toLowerCase() == "asc"){
		return parseInt(a[key] - b[key]);
	  }
	  else{
		return parseInt(b[key] - a[key]);
	  }
	}
  });
  if($debug){
	console.log("sortArrayOfObjects: temp: ",temp);
  } 
  return temp;
}

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}