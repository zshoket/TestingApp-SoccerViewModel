Ext.define('TestApp.store.Futy', {
    extend: 'Ext.data.Store',
    alias: 'store.futyshared',
    model: 'TestApp.model.Futy',
    groupField: 'team',
    data: { items: [
        {
            player: 'Messi',
            team: 'Barcelona',
            position: 'RW',
            rating: 90
        }, {
            player: 'Cristiano Ronaldo',
            team: 'Juventus',
            position: 'ST',
            rating: 88
        }, {
            player: 'Antione Griezmann',
            team: 'Barcelona',
            position: 'CF',
            rating: 81
        }, {
            player: 'Marco Reus',
            team: 'BVB',
            position: 'LW/LM',
            rating: 82
        }, {
            player: 'Marcus Rashford',
            team: 'Man Utd',
            position: 'ST',
            rating: 82
        }, {
            player: 'Frankie De Jong',
            team: 'Barcelona',
            position: 'CM',
            rating: 81
        }, {
            player: 'Jadon Sancho',
            team: 'BVB',
            position: 'RW/RM',
            rating: 82
        }, {
            player: 'Bruno Fernandes',
            team: 'Man Utd',
            position: 'CAM',
            rating: 86
        }, {
            player: 'Paulo Dybala',
            team: 'Juventus',
            position: 'CAM',
            rating: 84
        }, {
            player: 'Eden Hazard',
            team: 'Real Madrid',
            position: 'LW',
            rating: 85
        },
        {
            player: 'Gareth Bale',
            team: 'Real Madrid',
            position: 'RW',
            rating: 80
        },
        {
            player: 'Toni Kross',
            team: 'Real Madrid',
            position: 'CDM',
            rating: 83
        },
        {
            player: 'Luka Modric',
            team: 'Real Madrid',
            position: 'CM',
            rating: 81
        },
        {
            player: 'Fred',
            team: 'Man Utd',
            position: 'CDM',
            rating: 79
        },
        {
            player: 'Christian Pulisic',
            team: 'Chelsea',
            position: 'LW/LM',
            rating: 80
        },
        {
            player: 'Leon Bailey',
            team: 'Bayer 04 Leverkusen',
            position: 'CF/LM',
            rating: 80
        },
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
