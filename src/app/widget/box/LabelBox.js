define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dojo/on',
    'dojo/_base/declare',
    'dojo/text!./templates/label-box.html'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,lang,on,declare,template){
    return declare('app.weidget.LabelBox',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
            // on(this.textBoxNode,'change',lang.hitch(this,function(){
            //     console.log(this.textBoxNode.get('value'));
            // }));

            // this.textBoxNode.watch('value',lang.hitch(this,function(){
            //     console.log(this.textBoxNode.get('value'));
            // }));
        }
    })
});