Ext.define('SmartPillCase.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',
	requires:[
	    'Ext.TitleBar',
	    'Ext.form.Panel',
	    'Ext.form.FieldSet'
    ],
    
	config: {
        title: '홈',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,
        
        layout: "vbox",
		items: [
		     {
				xtype: 'toolbar',
				docked: "top",
				
				items: [ 
					Ext.create("Ext.Button", {
						text: "메인화면",
						handler: function(btn, event) {
							Ext.getCmp('cardPanel').setActiveItem(0);
						}
					}), 
					Ext.create("Ext.Button", {
						text: "메인등록화면",
						handler: function(btn, event) {
							Ext.getCmp('cardPanel').setActiveItem(1);
						}
					}),
					Ext.create("Ext.Button", {
						text: "메인보조화면",
						handler: function(btn, event) {
							Ext.getCmp('cardPanel').setActiveItem(2);
						}
					})
				]
			}, 
			{
				xtype:'panel',
				id: 'cardPanel',
				flex:1,
				layout: "card",
				items: [ 
				  {
					style: "background-color:#ff0000"
				  }, 
				  {
					style: "background-color:#00ff00"
				  }, 
				  {
					style: "background-color:#0000ff"
				  } 
				]
			} 
	  ]
    }
});