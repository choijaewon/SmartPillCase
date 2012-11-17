Ext.define('SmartPillCase.view.regist.W', {
	extend: 'Ext.Panel',
	xtype: 'regist_W',
	
	config: {
        title: '등',
        iconCls: 'time',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: '스마트약통 등록화면....'
        },

        html: [
            "...... 약통등록화면..."
        ].join("")
    },
});