sap.ui.define([
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException"
], function (SimpleType, ValidateException) {
 
    "use strict";
    //True, false value to Y/N
    return SimpleType.extend("ui5.app.template.model.customedType", {

        formatValue: function(oValue) {
			
           return oValue === "Y" ?  true : false;
        },
        parseValue: function(oValue) {
		   return oValue === true ? "Y" : "N";
        },
        validateValue: function(oValue) {
            if(oValue !== "Y" || oValue !== "Y" ) {
                throw new ValidateException(oValue+" is not a Y/N value");
            }
        }

    });

});