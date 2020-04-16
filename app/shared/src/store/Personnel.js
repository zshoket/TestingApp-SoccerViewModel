Ext.define('TestApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelshared',
    model: 'TestApp.model.Personnel',
    groupField: 'risktype',
    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", risktype: 'social', dept: "bridge" },
        { name: 'Sam Malik',     email: "sam.moris@enterprise.com",  phone: "555-222-2222", risktype: 'econ', dept: "security"},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", risktype: 'social', dept: "medical"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", risktype: 'politik', dept: "bridge"}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
