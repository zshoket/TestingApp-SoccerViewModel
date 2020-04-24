Ext.define('TestApp.store.Soccer', {
    extend: 'Ext.data.Store',
    alias: 'store.soccershared',
    model: 'TestApp.model.Soccer',
    groupField: 'unternehmen',
    proxy: {
        type: "ajax", 
        url: "http://localhost:3001/api/documents",
    },
    autoLoad: true,

listeners: {
    write: function(store, operation){
        var record = operation.getRecords()[0],
            name = Ext.String.capitalize(operation.action),
            verb;
                    if (name == 'Destroy') {
            record = operation.records[0];
            verb = 'Destroyed';
        } else {
            verb = name + 'd';
        }
        Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
    
    }
},
});