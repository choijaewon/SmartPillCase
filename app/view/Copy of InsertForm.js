Ext.define("SmartPillCase.view.InsertForm", {
	extend: "Ext.form.Panel",
	xtype: "insertFormPanel",
	
	requires: [
	   	    "Ext.form.FieldSet",
	   	    "Ext.field.Text",
	   	    "Ext.picker.Picker",
	   	    "Ext.field.Select",
	   	],
	   	
   	config: {
        title: '폼',
        iconCls: 'user',
   		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: '등록'
			},
   		    {
   		    	xtype:"fieldset", 
   		    	title:"약 정보 등록", 
   		    	instructions:"???", 
   		    	items: [
   		    	    {xtype:"textfield", name:"uid", value:"", label:"제목"},
   		    	    {xtype:"selectfield", label:"요일", name:"week"
   		    	    	,  options:[
   		    	        {text:'월',  value:'1'},
   		    	        {text:'화',  value:'2'},
   		    	        {text:'수',  value:'3'},
   		    	        {text:'목',  value:'4'},
		    	        {text:'금',  value:'5'},
		    	        {text:'토',  value:'6'},
		    	        {text:'일',  value:'7'}
   		    	     ]},
   		    	     {
   		    	 			xtype: 'segmentedbutton',
   		    	 			allowMultiple: true,
   		    	 			allowDepress: true,
   		    	 			//docked: 'bottom',
   		    	 			activeItem: 0,
   		    	 			name: 'week',
   		    	 			label: '요일',
   		    	 			items:[
   		    	 			{
								text: '매일',
								pressed: true
							},
							{
								text: '월'
							},
   		    	 			{
   		    	 				text: '화',				
   		    	 			},
   		    	 			{
   		    	 				text: '수',
   		    	 			},
   		    	 			{
   		    	 				text: '목',
   		    	 			},
   		    	 			{
   		    	 				text: '금',
   		    	 			},
   		    	 			{
   		    	 				text: '토',
   		    	 			},
   		    	 			{
   		    	 				text: '일',
   		    	 			}
   		    	 			]
   		    	 		},
   		                {
   		                    xtype: 'datepickerfield',
   		                    label: 'Birthday',
   		                    name: 'birthday',
   		                    value: new Date()
   		                },
   		    	 	    {xtype:"textareafield", name:"memo", value:"", label:"메모"},
   		    	]
   		    }, 
   			{xtype:"spacer", height:"20px"},
   			{xtype:"button", action:"login", text:"등록", ui:"confirm"},
   			{
			    xtype: 'picker',
			    docked: 'bottom',
			    hidden: true,
			    slots: [
			    {
			         name : 'day',
			         data : [
			             {text: '오전', value: 1},
			             {text: '오후', value: 2},
			         ]
			     },     
				        {
				            name : 'hour',
				            data : [
				                {text: '1', value: 1},
				                {text: '2', value: 2},
				                {text: '3', value: 3},
				                {text: '4', value: 4},
				                {text: '5', value: 5},
				                {text: '6', value: 6},
				                {text: '7', value: 7},
				                {text: '8', value: 8},
				                {text: '9', value: 9},
				                {text: '11', value: 11},
			                    {text: '12', value: 12},
				            ]
				        },
				        {
				            name : 'min',
				            data : [
				                {text: '00', value: 0},
				                {text: '01', value: 1},
				                {text: '02', value: 2},
				                {text: '03', value: 3},
				                {text: '04', value: 4},
				                {text: '05', value: 5},
				                {text: '06', value: 6},
				                {text: '07', value: 7},
				                {text: '08', value: 8},
				                {text: '09', value: 9},
				                {text: '10', value: 10},
				                {text: '11', value: 11},
				                {text: '12', value: 12},
				                {text: '13', value: 13},
				                {text: '14', value: 14},
				                {text: '15', value: 15},
				                {text: '16', value: 16},
				                {text: '17', value: 17},
				                {text: '18', value: 18},
				                {text: '19', value: 19},
				                {text: '20', value: 20},
				                {text: '21', value: 21},
				                {text: '22', value: 22},
				                {text: '23', value: 23},
				                {text: '24', value: 24},
				                {text: '25', value: 25},
				                {text: '26', value: 26},
				                {text: '27', value: 27},
				                {text: '28', value: 28},
				                {text: '29', value: 29},
				                {text: '30', value: 30},
				                {text: '31', value: 31},
				                {text: '32', value: 32},
				                {text: '33', value: 33},
				                {text: '34', value: 34},
				                {text: '35', value: 35},
				                {text: '36', value: 36},
				                {text: '37', value: 37},
				                {text: '38', value: 38},
				                {text: '39', value: 39},
				                {text: '40', value: 40},
				                {text: '41', value: 41},
				                {text: '42', value: 42},
				                {text: '43', value: 43},
				                {text: '44', value: 44},
				                {text: '45', value: 45},
				                {text: '46', value: 46},
				                {text: '47', value: 47},
				                {text: '48', value: 48},
				                {text: '49', value: 49},
				                {text: '50', value: 50},
				                {text: '51', value: 51},
				                {text: '52', value: 52},
				                {text: '53', value: 53},
				                {text: '54', value: 54},
				                {text: '55', value: 55},
				                {text: '56', value: 56},
				                {text: '57', value: 57},
				                {text: '58', value: 58},
				                {text: '59', value: 59},
				            ]
				        }
						
				      ]
			       
			   },
   		]
   	}
});