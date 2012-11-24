//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'SmartPillCase': 'app'
});
//</debug>

Ext.application({
    name: 'SmartPillCase',

    requires: [
        'Ext.MessageBox',
<<<<<<< HEAD
        'Ext.data.Store',
        'Ext.data.Model'
=======
        'Ext.picker.Picker'
>>>>>>> 등록페이지 수정
    ],
    
    controllers : ['InsertFormController'],

<<<<<<< HEAD
    views: ['Main','List','Home','Setup'],
<<<<<<< HEAD
    models      : ['MyPhoneNumber','MyPill'],
    stores      : ['PhoneNumber','Pill'],
=======
    models      : ['MyPhoneNumber'],
    stores      : ['PhoneNumber'],
=======
    views: ['Main','List','Home','Setup','InsertForm','Yoil'],
>>>>>>> 등록페이지 수정
>>>>>>> 66cfca05a1a7123d55f2a2ed5483b04aba91f1ec

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
<<<<<<< HEAD
        Ext.Viewport.add(Ext.create('SmartPillCase.view.Main'));   
        		
        
=======
//        Ext.Viewport.add(Ext.create('SmartPillCase.view.Main'));
        Ext.Viewport.add(Ext.create('SmartPillCase.view.InsertForm'));
//        Ext.Viewport.add(Ext.create('SmartPillCase.view.Yoil'));
>>>>>>> 등록페이지 수정
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
