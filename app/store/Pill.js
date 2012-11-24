Ext.define('SmartPillCase.store.Pill', {
    extend : 'Ext.data.Store',

    config : {
        storeId  : 'pills',
        autoLoad : true,
        model    : 'SmartPillCase.model.MyPill'
        	
    }
});