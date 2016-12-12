/*******************************************************************************
 * $Id: philipscicodetemplates.xml 276 2012-12-26 02:16:03Z wei.hu $
 * *****************************************************************************
 * 
 * <pre>
 *                         Philips Medical Systems
 *                © 2010 Koninklijke Philips Electronics N.V.
 * 
 * All rights are reserved. Reproduction in whole or in part is
 * prohibited without the written consent of the copyright owner.
 * 
 * 
 * FILE NAME: ElementButton.js
 * 
 * CREATED: 2016年4月8日 上午9:35:03
 * 
 * ORIGINAL AUTHOR(S): 310189849
 * 
 * </pre>
 ******************************************************************************/
define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dojo/_base/declare',
    'dojo/text!./templates/element-button.html'
], function(_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, lang, declare, template) {
    return declare('app.widget.ElementButton.ElementButton', [
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ], {

        /**
         * baseClass
         */
        baseClass : 'elementButton',

        /**
         * templateString
         */
        templateString : template,

        /**
         * value
         */
        value : null,

        /**
         * dndType
         */
        dndType : null,

        /**
         * constructor
         */
        constructor : function(/* Object */options) {
            this.inherited(arguments);
            lang.mixin(this, options);
        },

        /**
         * postCreate
         */
        postCreate : function() {
            this.inherited(arguments);
            this.domNode.setAttribute('dndType', this.dndType);
        }

    });
});