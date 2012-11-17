Ext.define('SmartPillCase.view.RootPanel', {
	extend: 'Ext.Panel',
	xtype: 'rootpanel',
	config : {
		
        title: '홈',
        iconCls: 'home',
        
		layout: "vbox",
		items: [ {
			xtype: 'toolbar',
			docked: "top",
			items: [ 
				Ext.create("Ext.Button", {
					text: "Red",
					handler: function(btn, event) {
						Ext.getCmp('cardPanel').setActiveItem(0);
					}
				}), 
				Ext.create("Ext.Button", {
					text: "Green",
					handler: function(btn, event) {
						Ext.getCmp('cardPanel').setActiveItem(1);
					}
				}),
				Ext.create("Ext.Button", {
					text: "Blue",
					handler: function(btn, event) {
						Ext.getCmp('cardPanel').setActiveItem(2);
					}
				})
			]
		}, {
			xtype:'panel',
			id: 'cardPanel',
			flex:1,
			layout: "card",
			items: [ {
				style: "background-color:#ff0000"
			}, {
				style: "background-color:#00ff00"
			}, {
				style: "background-color:#0000ff"
			} ]
		} ]
 
	}
});