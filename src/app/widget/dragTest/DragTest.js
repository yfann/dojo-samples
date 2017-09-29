define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    "dojo/dnd/Moveable",
    'dojo/on',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/text!./templates/drag-test.html',
    'dojox/mdnd/adapter/DndFromDojo'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Moveable,on,declare,lang,template,DndFromDojo){
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
            on(this.mouseNode,'mousemove',function(){
                console.log('mouse move');
            });
           on(this.mouseNode,'drag',function(){
                console.log('drag');
            });

            var el=document.getElementById("mm");
            el.addEventListener("mousemove",function(){
                console.log("mm move");
            },false);

             el.addEventListener("drag",function(){
                console.log("mm drag");
            },false);

            document.addEventListener("drag",function(){
                console.log("document drag");
                debugger
            },false);
        },
        _updateAreas:function(){
                // var _areaManager = dojox.mdnd.areaManager();
                // _areaManager._dropMode.updateAreas(_areaManager._areaList);
        }
    })
});