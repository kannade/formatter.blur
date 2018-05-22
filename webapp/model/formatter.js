jQuery.sap.declare("formatter.blur.model.formatter");
formatter.blur.model.formatter = {
	formatBlur: function(sVal) {

		if (sVal) {
			if (sVal === "00000000") {
				this.addStyleClass("blur");
			} else {
				this.removeStyleClass("blur");
			}

			return sVal;
		}
	}
};