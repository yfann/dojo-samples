define([
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel", 
    "dojo/store/Observable",
    "dijit/Tree",
    'app/widget/box/TextBox',
    'dijit/registry',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/query',
    'dojo/dom-construct',
    'dojo/dom-class',
    'dojo/dom-style',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'dojo/text!app/widget/tree/templates/tree-seg.html'
],function(Memory,ObjectStoreModel,Observable,Tree,TextBox,registry,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,query,domC,domClass,domStyle,declare,lang,on,template){
    return declare('app.weidget.treeSegment',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
             // Create test store, adding the getChildren() method required by ObjectStoreModel
            var myStore1 = new Memory({
                data: [
                    { id: 1, name:'test1'},
                    { id: 3, name:'test3'},
                    { id: 5, name:'test5'},
                    { id: 7, name:'test7'},
                    { id: 9, name:'test9'},
                    { id: 11, name:'test11'},

                ],
                getChildren: function(object){
                    return this.query({},{sort:[{attribute:"id"}]});
                }
            });
            myStore = new Observable(myStore1);
            // Create the model
            var myModel = new ObjectStoreModel({
                store: myStore,
                query: {id: 1}
            });
            
            // Create the Tree.
            var tree = new Tree({
                model: myModel
            });
            tree.placeAt(this.treeNode);
            tree.startup();

            var i=2;
           on(this.btnNode,'click',lang.hitch(this,function(){
                myStore.put(
                    { id: i, name:'test'+i}
                )
                i=i+2;
            }));
        }
       
    })
});