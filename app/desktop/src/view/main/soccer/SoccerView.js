Ext.define('TestApp.view.soccer.SoccerView',{
	extend: 'Ext.grid.Grid',
	xtype: 'soccerview',
	cls: 'soccerview',
	requires: ['Ext.grid.rowedit.Plugin'],
	controller: {type: 'soccerviewcontroller'},
	viewModel: {type: 'soccerviewmodel'},
	store: {type: 'soccershared'},
	grouped: true,
	plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 200,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Unternehmen',
            dataIndex: 'unternehmen',
            editable: true,
            width: 230
        },
        {
            text: 'Kurzbeschreibung',
            dataIndex: 'kurzbeschreibung',
            editable: false,
            width: 230
        },
        {
            text: 'Reifegrad',
            dataIndex: 'reifegrad',
            editable: false,
            width: 230
        },
        {
            text: 'Nutzenversprechen',
            dataIndex: 'nutzenversprechen',
            editable: false,
            width: 230
        },
        {
            text: 'Auswirkungen Mensch',
            dataIndex: 'auswirkungenMensch',
            editable: false,
            width: 230
        },
        {
            text: 'Auswirkungen Organisation',
            dataIndex: 'auswirkungenOrganisation',
            editable: false,
            width: 230
        },
        {
            text: 'Auswirkungen Technik',
            dataIndex: 'auswirkungenTechnik',
            editable: false,
            width: 230
        }        
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});