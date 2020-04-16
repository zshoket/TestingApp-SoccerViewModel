Ext.define('TestApp.view.main.footer.FooterView', {
	extend: 'Ext.Toolbar',
	xtype: 'footerview',
	cls: 'footerview',

	items: [
		{ 
			xtype: 'container',
			cls: 'footerviewtext',
	  html: 'myView.de' 
	  //+ Ext.versions.extjs.version
			//bind: { html: '{name} footer' }
		}
	]
});
