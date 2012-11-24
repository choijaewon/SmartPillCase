Ext.define('SmartPillCase.view.Yoil', {
	extend: 'Ext.Panel',
	xtype: 'yoilPanel',
	
	requires: [
		   	    "Ext.form.FieldSet",
		   	    "Ext.field.Checkbox"
		   	],
	
	config: {

        styleHtmlContent: true,
        scrollable: true,
        
        items: [
            {
            	docked: 'top',
                xtype: 'titlebar',
                title: '반복(요일선택)',
            	items: [
					{action:'main', text:'뒤로', iconMask: true, ui: 'back'}
				]
            },
        	{
                xtype: 'checkboxfield',
                name : 'mon',
                label: '월',
                value: 1,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'tue',
                label: '화',
                value: 2,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'wed',
                label: '수',
                value: 3,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'thu',
                label: '목',
                value: 4,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'fri',
                label: '금',
                value: 5,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'sat',
                label: '토',
                value: 6,
                checked: true
            },
            {
                xtype: 'checkboxfield',
                name : 'sun',
                label: '일',
                value: 7,
                checked: true
            }
        ]
    },
});