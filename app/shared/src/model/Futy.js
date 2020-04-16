Ext.define('TestApp.model.Futy', {
extend: 'TestApp.model.Base',
fields: ['player', 'team', 'position', {
        name: 'rating',
        type: 'int'
    }
]
});
