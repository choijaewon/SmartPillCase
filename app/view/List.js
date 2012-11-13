Ext.define('SmartPillCase.view.List', {
	extend: 'Ext.Panel',
	xtype: 'listPanel',
	
	config: {
        title: '리스트',
        iconCls: 'time',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: '스마트약통 리스트'
        },

        html: [
            "리스트 화면"
        ].join("")
    },
});