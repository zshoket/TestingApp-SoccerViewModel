Ext.define('TestApp.view.soccer.SoccerViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.soccerviewcontroller',

	onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, 
            { name: value.record.data.name },
            { unternehmen: value.record.data.unternehmen},
            { kurzbeschreibung: value.record.data.kurzbeschreibung},
            { reifegrad: value.record.data.reifegrad},
            { nutzenversprechen: value.record.data.nutzenversprechen},
            { herausforderungen: value.record.data.herausforderungen},
            { auswirkungenMensch: value.record.data.auswirkungenMensch},
            { auswirkungenOrganisation: value.record.data.auswirkungenOrganisation},
            { auswirkungenTechnik: value.record.data.auswirkungenTechnik}
            );
            Ext.Msg.confirm('Confirm', value.record.data.player, 'onConfirm', this);
    },

});
