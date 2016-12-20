define([
    'dojo/dnd/Source',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/text!./templates/source-test.html'
],function(Source,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,lang,template){
    return declare('app.weidget.DragTest',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
            var source=new Source("sourceTest",{accept:["test"]});//sourceTest id
            source.insertNodes(false,[
                {data:"test1",type:["test"]},
                {data:"test2",type:["test"]},
                {data:"test3",type:["test"]},
                {data:"test4",type:["test"]},
                {data:"test5",type:["test"]},
                {data:"test6",type:["test"]},
            ]);


            var target=new Source("targetTest",{accept:["test"]});
        }
    })
});