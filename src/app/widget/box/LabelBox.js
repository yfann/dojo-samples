define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/text!./templates/label-box.html'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,template){
    return declare('app.weidget.LabelBox',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        constructor:function(){}
    })
});