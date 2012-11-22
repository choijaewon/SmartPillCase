Ext.define('SmartPillCase.store.PhoneNumber', {
    extend : 'Ext.data.Store',

    config : {
        storeId  : 'phoneNumbers',
        autoLoad : true,
        model    : 'SmartPillCase.model.MyPhoneNumber'
    }
});