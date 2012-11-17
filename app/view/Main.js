Ext.define('SmartPillCase.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'homePanel'
			},
			{
				xtype: 'listPanel'
			},
			{
				xtype: 'setupPanel'
			}
        ]
    }
});
