/*
 * File: SmartPillCase/model/MyPhoneNumber.js
 */

Ext.define('SmartPillCase.model.MyPhoneNumber', {
    extend   : 'Ext.data.Model',
    requires : [
        'SmartPillCase.ux.WebSqlProxy'
    ],
    config   : {
        proxy  : {
            type        : 'websql',
            dbName      : 'SmartPillCase',
            dbTable     : 'PhoneNumber',
            dbVersion   : '1.22',
            writer      : {
                type           : 'json',
                writeAllFields : false
            },
            reader      : {
                type       : 'json',
                idProperty : 'id'
            },
            initialData : [
                {
                    id            : 1,
                    PhoneNum          : '010-000-0000'
                }
            ]
        },
        fields : [
            {name : 'PhoneNum', type : 'string'}
        ]
    }
});