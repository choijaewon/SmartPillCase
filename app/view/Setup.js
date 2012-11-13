Ext.define('SmartPillCase.view.Setup', {
	extend: 'Ext.Panel',
	xtype: 'setupPanel',
	
	config: {
        title: '설정',
        iconCls: 'settings',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: '스마트약통 설정'
        },

        html: [
            "설정 화면"
        ].join("")
    },
});