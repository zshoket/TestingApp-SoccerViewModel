Ext.define('TestApp.store.Soccer', {
    extend: 'Ext.data.Store',
    alias: 'store.soccershared',
    model: 'TestApp.model.Soccer',
    groupField: 'team',
//     data: { items: [
//     {
//         player: 'Kemba Walker',
//         team: 'Boston Celtics',
//         rating: 88
//     }, {
//         player: 'Jayson Tatum',
//         team: 'Boston Celtics',
//         rating: 86
//     }, {
//         player: 'Jaylen Brown',
//         team: 'Boston Celtics',
//         //position: 'CF',
//         rating: 85
//     }, {
//         player: 'Gordon Hayward ',
//         team: 'Boston Celtics',
//         rating: 82
//     }, {
//         player: 'Marcus Smart',
//         team: 'Boston Celtics',
//         rating: 82
//     }, {
//         player: 'Joel Embiid',
//         team: 'Philadelphia 76ers',
//         rating: 91
//     }, {
//         player: 'Ben Simmons',
//         team: 'Philadelphia 76ers',
//         rating: 88
//     }, {
//         player: 'Tobias Harris',
//         team: 'Philadelphia 76ers',
//         rating: 86
//     }, {
//         player: 'Al Horford',
//         team: 'Philadelphia 76ers',
//         rating: 84
//     }, {
//         player: 'Josh Richardson',
//         team: 'Philadelphia 76ers',
//         rating: 79
//     }

//     ]},
//     proxy: {
//         type: 'memory',
//         reader: {
//             type: 'json',
//             rootProperty: 'items'
//         }
//     }
// });
proxy: {
    type: 'rest',
    url : 'http://localhost:3001/api/documents',
          headers: {
            'Accept': 'application/json'
        },
            callbackKey: 'callback',
                callback: function( data ) {
                    console.log("callback" + data);
            },
    reader: {
        type: 'json'
    }
},
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
data: {
items: [
    { name: 'id', type: 'int', defaultValue: null },
    { name: 'name', type: 'string' },
    { name: 'unternehmen', type: [
        "string"
      ]},

    { name: 'kurzbeschreibung', type: [
        "string"
      ]},

    { name: 'reifegrad', 
    type: [
        "string"
      ]},
    
    { name: 'nutzenversprechen', type: [
        "string"
      ]},

    { name: 'herausforderungen', type: [
        "string"
      ]},

    { name: 'auswirkungenMensch', type: [
        "string"
      ]},
    { name: 'auswirkungenOrganisation', type: [
        "string"
      ]},

    { name: 'auswirkungenTechnik', type: [
        "string"
      ]},
]}
});
