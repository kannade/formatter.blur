sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"./../model/formatter"
], function(Controller, Formatter) {
	"use strict";

	return Controller.extend("formatter.blur.controller.Main", {
		onInit: function() {

		},

		onAfterRendering: function() {
			var oComp = this.getOwnerComponent();
			var oEmplMdl = oComp.getModel("oEmplMdl");

			if (oEmplMdl) {
				oEmplMdl.setProperty("/Pernr", "00001234");
				oEmplMdl.setProperty("/Pernr2", "00000000");

				oEmplMdl.setProperty("/PositionTxt", "Начальник управления");
				oEmplMdl.setProperty("/PositionTxt2", "Начальник блока");

				oEmplMdl.setProperty("/OrgunitTxt", "Руководство г. Москва");
				oEmplMdl.setProperty("/OrgunitTxt2", "Руководство Питер");
			}

		}
	});
});