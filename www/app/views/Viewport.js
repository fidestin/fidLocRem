//The Viewport is a TabPanel where the objects are full panels which come with bottom toolbar buttons etc etc
ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    id:'viewport',
    initComponent: function() {
        Ext.apply(this, {
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            items: [
				//{ xtype: 'homecard', 		id : 'home' },  		//only these panels appear on bottom toolbar
				//{ xtype: 'aboutcard',     id:'aboutcard'},	//
				//{ xtype: 'about2',     id:'about2'},	//
				//{ xtype: 'mapcard',     id:'mapcard'},	//
				
				//{ xtype: 'categorycard',     id:'categorycard'},	//
                //{ xtype: 'photocard',		id : 'photocard' },
				ToolbarDemo.views.stuffView,						//add this for the Panel to appear...
                ToolbarDemo.views.mainView,							//this is the vouchers panel
				
				
				//{ xtype: 'scancard',		id : 'scancard'},
                //{ xtype: 'verifycard',		id : 'verifycard'},		//part of the Managers App
				//{ xtype: 'storecard',		id : 'storecard'},			//part of the Managers App
				{ xtype: 'favourites',	id : 'favourites' },
                { xtype: 'settingscard',	id : 'sett' }
                
                //could also do [ToolarDemo.views.Searchcard] to add a panel...
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
   
       
    }
});

Ext.reg('viewport', ToolbarDemo.views.Viewport);