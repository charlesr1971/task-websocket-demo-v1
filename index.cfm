<cfoutput>
<html>
  <head>
  
    <meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
    <meta charset="utf-8">
    <title>Task Websocket Demo v1</title>
    
    <link rel="stylesheet" href="assets/mdl/material.blue_grey-light_blue.min.css">
    <link rel="stylesheet" href="assets/mdl-selectfield/mdl-selectfield.min.css">
    <link rel="stylesheet" href="assets/mdl-stepper/materialize.stepper.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://fonts.googleapis.com/css?family=Chelsea+Market|Anton|Spinnaker|Oswald|Audiowide|Chonburi|Doppio+One|Faster+One|Fjalla+One|Jockey+One|Kanit|Krona+One|Limelight|Montserrat:400,700|Notable|Orbitron|Poller+One|Roboto|Roboto+Mono:300,400,500,700|Staatliches|Ubuntu+Condensed|Uncial+Antiqua|Crimson+Text|Noto+Serif&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css?nocache=#RandRange(1000000,9999999)#" />
    
    <script src="assets/js/global.js?nocache=#RandRange(1000000,9999999)#"></script>
    
    <script src="assets/mdl/material.js"></script>
	<script src="assets/mdl-selectfield/mdl-selectfield.js"></script>
    <script src="assets/mdl-stepper/materialize.min.js"></script>
    <script src="assets/mdl-stepper/materialize.stepper.js"></script>
    
    <script src="assets/js/framework/jquery.js" type="text/javascript"></script>
	<script type="text/javascript">
      jQuery.noConflict();
    </script>
    
    <script src="assets/js/data.js?nocache=#RandRange(1000000,9999999)#"></script>
    <script src="assets/js/data-methods.js?nocache=#RandRange(1000000,9999999)#"></script>
    <script src="assets/js/websocket.js?nocache=#RandRange(1000000,9999999)#"></script>
    <script src="assets/js/restapi.js?nocache=#RandRange(1000000,9999999)#"></script>
    <script src="assets/js/utils.js?nocache=#RandRange(1000000,9999999)#"></script>
    
    <script src="https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css">
    <link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-alpine.css">
    
    <script language="javascript" type="text/javascript">
		
		jQuery(document).ready(function() {
		  console.log('index.htm: document.ready');
		  initWebsocket();
		  const agGridDiv = document.querySelector('##agGridDiv');
		  //initAgGrid(agGridDiv);
		  $initAgGrid = new initAgGrid();
		  $initAgGrid.init(agGridDiv);
		  //window.addEventListener("resize", $initAgGrid.autoSizeAll);
		});
		
    </script>
      
  </head>
    <body>
      
      <!-- Always shows a header, even in smaller screens. -->
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Task Websocket Demo v1</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <!--<a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>-->
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Task Websocket Demo v1</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content">
          
            <div class="mdl-grid">
				
              <div id="page-content-left-container" class="mdl-cell mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone light">
              </div>
              
              <div id="page-content-container" class="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--4-col-phone light">
                <div class="container">
                  
                  <div id="agGridDiv" class="ag-theme-alpine" style="height: 600px; width:99%;"></div>
                  
                </div>
              </div>
              
              <div id="page-content-right-container" class="mdl-cell mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone light">
              </div>
            
          </div>
        </main>
      </div>
        
  </body>
</html>
</cfoutput>