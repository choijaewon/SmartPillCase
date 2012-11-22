Ext.define('SmartPillCase.store.Companies', {
    extend : 'Ext.data.Store',

    config : {
        storeId  : 'phoneNumber',
        autoLoad : true,
        model    : 'SmartPillCase.model.MyPhoneNumber'
    }
});