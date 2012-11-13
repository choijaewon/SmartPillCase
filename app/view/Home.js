Ext.define('SmartPillCase.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homePanel',
	
	config: {
        title: '홈',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: '스마트약통'
        },

        html: [
            "약 등록 버튼"
        ].join("")
    },
});