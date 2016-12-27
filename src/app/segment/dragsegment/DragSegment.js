define([
    'app/segment/dragsegment/NestOverDropMode',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/text!./templates/drag-segment.html',
    'dojox/mdnd/adapter/DndFromDojo'
],function(NestOverDropMode,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,lang,template,DndFromDojo){
    return declare('app.segment.dragsegment.DragSegment',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){

        }
    })
});