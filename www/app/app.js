ToolbarDemo = new Ext.Application({
    name: "ToolbarDemo",

    launch: function() {
    	console.log('app.js_launch');
		//localStorage.clear();  //--This was added just to double-check the localStorage management....
		getLocation();	//asynch call to get user position...
    	//Must create this here - before creating the viewport - or viewport.initComponent will fail as mainView doesnt exist yet...
    	//Required for the card panels.
                                  //Added on Mac
    
		if (!ToolbarDemo.views.mainView) {
			console.log('app.js_mainview');
		ToolbarDemo.views.mainView = new ToolbarDemo.views.MainView();
        }
		
		if (!ToolbarDemo.views.stuffView) {
			console.log('app.js_stuffview');
			ToolbarDemo.views.stuffView = new ToolbarDemo.views.StuffView();		
        }
		
		if (!ToolbarDemo.views.Homecard) {
     console.log('app.js_homecard');
     ToolbarDemo.views.homecard = new ToolbarDemo.views.Homecard();
        }
		//Added again on Mac
		//***** Filename defined in html5load.js DATA_SOURCE_FILE upload it to /loya/ root dir...
		//add call here to pre-load the db into browser memory.
                                  console.log('Starting FB stuff');
      
                                  
     //window.fbAsyncInit();			//check FB login status here?
                                  
                                  
                                  console.log('starting load.....');
		startLoad();
                                  
    
                                  
                                    
		
		//add call there to load this into stores collection...we pass in a categoryID now..
		//thirdload();
		
		this.views.viewport = new this.views.Viewport();
		console.log('Viewport added');
		//alert('Email is ' + localStorage.email + '. Acivated is ' + localStorage.activated);
    	if (localStorage.email==undefined){
    		//alert('email undefined');
    		this.views.settingscard = this.views.viewport.getComponent('sett');
			ToolbarDemo.views.viewport.setActiveItem(this.views.settingscard);
    	}
    	
    	
    	
    	//must keep checking this activated flag each time the app loads....until its set to 1. Then we never need to check it again.
    	
    	else if ((localStorage.activated==undefined) || (localStorage.activated=="0")){
    		var resActive=ToolbarDemo.views.IsCustomerActive(localStorage.email,function(num){
	    			switch (num){
		    		case -99:
		    			Ext.Msg.alert('KeepM','Brendan, an error occurred when you tried to check activity. Doh!') ;
		    			//alert('switch-99');
		    			break;
		    		case 0:
		    			//ToolbarDemo.views.aboutcard = ToolbarDemo.views.viewport.getComponent('aboutcard');
		    			//ToolbarDemo.views.viewport.setActiveItem(ToolbarDemo.views.aboutcard);
		    			Ext.Msg.alert('Activation',localStorage.firstname +' please activate your account, check your email for the link.');
		    			break;
		    		case 1:
		    			localStorage.activated="1";
		    			ToolbarDemo.views.OpenBarCode();		//fire the scan straight away....
		    			//alert('switch-1');
		    			break;
		    		default :
		    			//alert('switch-default');
		    			//localStorage.activated="1";
    			}
	    		//alert('Callback value is :' +num);			
    		}				//end of callback
    		);	
    	}
    	
    	else if (localStorage.activated==1){
    		//alert('fire scan anyway');
    		ToolbarDemo.views.OpenBarCode();
    	}
        
       
    }
});
