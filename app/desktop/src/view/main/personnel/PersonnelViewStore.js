Ext.define('TestApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'name', 'email', 'phone', 'dept', 'risktype',
    ],
    groupField: 'risktype',
    data: { items: [
        { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge", risktype: 'social' },
        { name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "engine", risktype: 'econ' },
        { name: 'Sam',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333", dept: "bridge", risktype: 'econ' },
        { name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444", dept: "bridge", risktype: 'social' }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
