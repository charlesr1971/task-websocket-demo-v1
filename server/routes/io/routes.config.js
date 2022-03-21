
/*
global variables
*/

const debugChunk = false;
const debugData = true;
const debugResponse = true;
const debug = true;
const debugErr = true;


const endpointPrefix = '/api/v1/';

exports.routesConfig = function (app, routeOptions) {

  const { env, port, secure, origin, rootDir } = routeOptions;

  // api endpoint: /app/create-data
  // method: POST
  // description: create test data

  app.post(endpointPrefix + 'create-data', async function (req, res, next) {
    try{
      let data = req.body;
      if(debugData){
        console.log('io/routes.config.js: app:create-data: data: ', data);
      }
	  const { id, status, obj } = data;
	  if(debugData){
        console.log('io/routes.config.js: app:create-data: id: ',id,' status: ',status,' obj: ',obj);
      }
      const testData = data;
      if(debugResponse){
        console.log('io/routes.config.js: app:create-data: testData: ', testData);
      }
      res.status(200).json(testData);
    }
    catch(err){
      err.type = 'app:create-data';
      next(err);
    }
  });

  // api endpoint: /app/read-data
  // method: GET
  // description: read test data

  app.get(endpointPrefix + 'read-data', async function (req, res, next) {
    try{
      let data = req.body;
      if(debugData){
        console.log('io/routes.config.js: app:read-data: data: ', data);
      }
	  const { id, status } = data;
	  if(debugData){
        console.log('io/routes.config.js: app:read-data: id: ',id,' status: ',status);
      }
      const testData = data;
      if(debugResponse){
        console.log('io/routes.config.js: app:read-data: testData: ', testData);
      }
      res.status(200).json(testData);
    }
    catch(err){
      err.type = 'app:read-data';
      next(err);
    }
  });
  
  
  // api endpoint: /app/update-data
  // method: PATCH
  // description: update test data

  app.patch(endpointPrefix + 'update-data', async function (req, res, next) {
    try{
      let data = req.body;
      if(debugData){
        console.log('io/routes.config.js: app:update-data: data: ', data);
      }
	  const { id, status, obj } = data;
	  if(debugData){
        console.log('io/routes.config.js: app:update-data: id: ',id,' status: ',status,' obj: ',obj);
      }
      const testData = data;
      if(debugResponse){
        console.log('io/routes.config.js: app:update-data: testData: ', testData);
      }
      res.status(200).json(testData);
    }
    catch(err){
      err.type = 'app:update-data';
      next(err);
    }
  });
  
  
  // api endpoint: /app/delete-data
  // method: DELETE
  // description: delete test data

  app.delete(endpointPrefix + 'delete-data', async function (req, res, next) {
    try{
      let data = req.body;
      if(debugData){
        console.log('io/routes.config.js: app:delete-data: data: ', data);
      }
	  const { id, status } = data;
	  if(debugData){
        console.log('io/routes.config.js: app:delete-data: id: ',id,' status: ',status);
      }
      const testData = data;
      if(debugResponse){
        console.log('io/routes.config.js: app:delete-data: testData: ', testData);
      }
      res.status(200).json(testData);
    }
    catch(err){
      err.type = 'app:delete-data';
      next(err);
    }
  });

};
