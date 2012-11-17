Ext.define('SmartPillCase.view.Setup', {
	extend: 'Ext.Panel',
	xtype: 'setupPanel',
	
	config: {
        title: '설정',
        iconCls: 'settings',

        styleHtmlContent: true,
        scrollable: true,

        items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: '스마트약통 설정'
                },
                {
                    xtype: 'fieldset',
                    title: '전화번호 설정하기',
                    instructions: '알람 확인시 설정된 전화번호로 문자를 발송합니다.',
                    
                    items: [   
                        {
                            xtype: 'textfield',
                            label: '전화번호',
                            name: 'phoneNumber',
                            id: 'phoneNumber',
                            value: window.localStorage.getItem('phoneNumber')
                        }
                    ]
                },
                {
                    xtype: 'button',
                    itemId: 'setbutton',
                    ui: 'confirm',
                    text: '전화번호 설정'
                }
            ],
            listeners: [
                        {
                            fn: 'onSetbuttonTap',
                            event: 'tap',
                            delegate: '#setbutton'
                        }
                    ]
    },

    onSetbuttonTap: function(button, e, options) {
    	window.localStorage.setItem('phoneNumber', Ext.getCmp('phoneNumber')._value);
    	Ext.getCmp('phoneNumber')._value = window.localStorage.getItem('phoneNumber');
    	
    }
});

