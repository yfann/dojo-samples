define([
     'dojox/layout/GridContainer',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/text!./templates/grid-container-test.html',
    'dojox/mdnd/adapter/DndFromDojo'
],function(GridContainer,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,lang,template,DndFromDojo){
    return declare('app.weidget.DragTest',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
            
            // this.subscribe("/dnd/start",this._updateAreas());

            this.subscribe('/dnd/drop/after',function(){
                console.log('drag');
            });

            var widget=new GridContainer({
                isAutoOrganized:true,
                style:{width:'20%',height:'30%',border:'solid 1px red'},
                acceptTypes:[]
            },this.testNode);
            widget.startup();
        }
    })
});