Ext.define('TestApp.view.nbaratings.NbaRatingsView',{
	extend: 'Ext.grid.Grid',
	xtype: 'nbaratingsview',
	cls: 'nbaratingsview',
	controller: {type: 'nbaratingsviewcontroller'},
	viewModel: {type: 'nbaratingsviewmodel'},
	requires: ['Ext.grid.rowedit.Plugin'],
	store: {type: 'futyshared'},
	grouped: true,
	
	plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Player',
            dataIndex: 'player',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Team',
            dataIndex: 'team',
            editable: true,
            width: 230
        },
        {
            text: 'Rating',
            dataIndex: 'rating',
            editable: true,
            width: 230
        },
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }	
});