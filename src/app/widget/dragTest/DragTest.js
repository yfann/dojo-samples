define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/text!./templates/drag-test.html',
    'dojox/mdnd/adapter/DndFromDojo'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,lang,template,DndFromDojo){
    return declare('app.weidget.DragTest',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
            
            // this.subscribe("/dnd/start",this._updateAreas());

            // this.subscribe('/dnd/drop/after',function(){
            //     console.log('drag');
            // });
        },
        _updateAreas:function(){
                // var _areaManager = dojox.mdnd.areaManager();
                // _areaManager._dropMode.updateAreas(_areaManager._areaList);
        }
    })
});