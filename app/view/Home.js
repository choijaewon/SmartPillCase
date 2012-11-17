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
        	 	/*
        	 xtype:'button',
        	 ui:'normal',
        	 text:'등록',
        	 iconCls:'action',
        	 iconMask:true,
        	 handler:function(){
        		 Ext.Msg.alert("Message ", "Hi--", Ext.emptyFn) ;
        	 }
        	 */
        	 
        	 
		 }       
        ],

        html: [
            "<div style='text-align:center;'>",
            "등록",
            "</div>"
        ].join("")
    }
    
});