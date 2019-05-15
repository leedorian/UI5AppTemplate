sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"ui5/app/template/model/formatter"
], function(Controller, History, UIComponent, Formatter) {
	"use strict";

	return Controller.extend("ui5.app.template.controller.BaseController", {
		formatter: Formatter,
		/**
		 * Convenience method for accessing the router.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		/**
		 * Getter for the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("FirstView", {}, true /*no history*/);
			}
		},
		/**
		 * Convenience method for determin if the view is compact size applied
		 * @public
		 * @returns {boolean} the model instance
		 */
		isCompact: function(){
			return !!this.getView().$().closest(".sapUiSizeCompact").length;
		},
		/**
		 * Convenience method for getting the component model by name.
		 * @public
		 * @param {string} [sName] the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getComponentModel: function (sName) {
			return this.getOwnerComponent().getModel(sName);
		},
		/**
		 * Convenience method for show a toast message box
		 * @param {string} [sMessage] the message text
		 * @public
		 */
		showToastMessage: function (sMessage) {
			MessageToast.show(sMessage);
		},
		/**
		 * Convenience method for getting the view model by name.
		 * @public
		 * @param {string} [sName] the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},
		/**
		 * Convenience method for setting the view model.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},
		/**
		 * Show busy dialog on page
		 * @public
		 */
		showBusyDialog: function(){
			this.getOwnerComponent().oBusyDialog.open();
		},
		/**
		 * Hide busy dialog on page
		 * @public
		 */
		hideBusyDialog: function(){
			this.getOwnerComponent().oBusyDialog.close();
		}
		
	});

});