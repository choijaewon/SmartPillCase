/*
 * File: SmartPillCase/model/MyPill.js
 */

Ext.define('SmartPillCase.model.MyPill', {
    extend   : 'Ext.data.Model',
    requires : [
        'SmartPillCase.ux.WebSqlProxy'
    ],
    config   : {
        proxy  : {
            type        : 'websql',
            dbName      : 'SmartPillCase',
            dbTable     : 'Pill',
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
                    PillName      : '인사돌',
                    PillImg       : 'http://localhost:8080/SmartPillCase/resources/images/pill1.png',
                    PillChk       : 'Y',
                    PillTime      : '09:30',
                    PillChkTime   : '10:00',
                    PillMemo      : '하루 1번 1정'
                }, 
                {
                    id            : 2,
                    PillName      : '감기약',
                    PillImg       : 'http://localhost:8080/SmartPillCase/resources/images/pill2.png',
                    PillChk       : 'Y',
                    PillTime      : '10:00',
                    PillChkTime   : '10:00',
                    PillMemo      : '식후 30분'
                }, 
                {
                    id            : 3,
                    PillName      : '감기약',
                    PillImg       : 'http://localhost:8080/SmartPillCase/resources/images/pill2.png',
                    PillChk       : 'N',
                    PillTime      : '13:00',
                    PillChkTime   : '',
                    PillMemo      : '식후 30분'
                }, 
                {
                    id            : 4,
                    PillName      : '감기약',
                    PillImg       : 'http://localhost:8080/SmartPillCase/resources/images/pill2.png',
                    PillChk       : 'N',
                    PillTime      : '19:00',
                    PillChkTime   : '',
                    PillMemo      : '식후 30분'
                }, 
                {
                    id            : 5,
                    PillName      : '홍삼정',
                    PillImg       : 'http://localhost:8080/SmartPillCase/resources/images/pill3.png',
                    PillChk       : 'Y',
                    PillTime      : '07:30',
                    PillChkTime   : '07:30',
                    PillMemo      : '하루 1번 1스푼'
                }
            ]
        },
        fields : [
            {name : 'PillName', mapping:'PillName', type : 'string'},
            {name : 'PillImg', mapping:'PillImg', type : 'string'},
            {name : 'PillChk', mapping:'PillChk', type : 'string'},
            {name : 'PillTime', mapping:'PillTime', type : 'string'},
            {name : 'PillChkTime', mapping:'PillChkTime', type : 'string'},
            {name : 'PillMemo', mapping:'PillMemo', type : 'string'}
        ]
    }
});