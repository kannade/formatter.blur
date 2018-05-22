sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createJSONModels: function() {
			var oModel = new sap.ui.model.json.JSONModel({
				Pernr: "",
				PositionTxt: "",
				OrgunitTxt: "",
				Pernr2: "",
				PositionTxt2: "",
				OrgunitTxt2: ""
			});
			return oModel;
		},

	};
});