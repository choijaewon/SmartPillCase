Ext.define('SmartPillCase.view.List', {
	extend: 'Ext.Panel',
	xtype: 'listPanel',
	
    requires : [
          'Ext.dataview.List'
    ],
	
	config: {
        title: '리스트',
        iconCls: 'time',

        styleHtmlContent: true,
        scrollable: true,
        layout : 'fit',

        items: [
           {
	            docked: 'top',
	            xtype: 'titlebar',
	            title: '스마트약통 리스트'
	        }, 
	        {
	            xtype   : 'list',
	            itemTpl : '<div><img src="{PillImg}" style="width:80px;height:80px;"></div>',
	            store   : 'pills'
	        }
        ]

    },
});

