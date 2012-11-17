Ext.define('SmartPillCase.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',
	requires:[
	    'Ext.TitleBar',
	    'Ext.form.Panel',
	    'Ext.form.FieldSet',
    ],
	config: {
        title: '홈',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items:[
         {
            docked: 'top',
            xtype: 'titlebar',
            title: '스마트약통'
         },
         {
        	docked:'bottom',
        	xtype:'button',
        	text:'regist',
        	width:'200px',
        	
        	buttonFn:function(){
        		Ext.Msg.alert('Message','success', function() {
                    console.log('alert closed');
                    var tab = Ext.getCmp('listPanel');
                    tab.setActiveItem(1);
            });

        	}
         },
         {
         	buttonFnn:function(){
         		var tab = Ext.getCmp('regist_W');
                 tab.setActiveItem(1);
         	}
         }
        ],

        html: [
            "<div style='text-align:center;'>",
            "<a href='javascript:buttonFnn();'>등록</a>",
            "</div>"
        ].join("")
    }
    
});