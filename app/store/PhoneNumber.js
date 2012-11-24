Ext.define('SmartPillCase.store.PhoneNumber', {
    extend : 'Ext.data.Store',

    config : {
        storeId  : 'phoneNumbers',
        autoLoad : true,
        model    : 'SmartPillCase.model.MyPhoneNumber',
        
        listeners: {
            load: function( store, records, successful, operation, eOpts){
            	Ext.getCmp('phoneNumber').setValue(store.getAt(0)._data.PhoneNum);
            }
        }
    }
});