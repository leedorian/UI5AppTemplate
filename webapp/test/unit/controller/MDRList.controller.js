/*global QUnit*/

sap.ui.define([
	"ui5/app/template/controller/MDRList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MDRList Controller");

	QUnit.test("I should test the MDRList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});