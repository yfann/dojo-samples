define([
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
    'dojo/text!./templates/matrix-setting.html'
],function(TextBox,registry,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,query,domC,domClass,domStyle,declare,lang,on,template){
    return declare('app.weidget.Matrix',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        rowCount:null,
        colCount:null,
        postCreate:function(){

            this.rowNode.watch('value',lang.hitch(this,function(){
                this.initValue();
                this.generateTable();
            }));

            this.columnNode.watch('value',lang.hitch(this,function(){
                this.initValue();
                this.generateTable();
            }));

            this.init();
        },
        init:function(){
            this.rowNode.set('value',3);
            this.columnNode.set('value',3);
        },
        initValue:function(){

            var row=parseInt(this.rowNode.get('value'));
            var col=parseInt(this.columnNode.get('value'));

            this.rowCount=isNaN(row)?this.rowCount:row;
            this.colCount=isNaN(col)?this.colCount:col;
        },
        generateTable:function(){
            if(!(this.rowCount>0 && this.colCount>0))
            {
                return;
            }

            var table=domC.create("div",{className:"table"});
            var row,cell;
            for(var i=0;i<this.rowCount;i++)
            {
                row=domC.create("div",{className:"row"});
                for(var j=0;j<this.colCount;j++)
                {
                    row.appendChild(domC.create("div",{
                        className:"cell",
                        innerHTML:'&nbsp;'
                    }));
                }
                table.appendChild(row);
            }
            domC.empty("content");
            domC.place(table,"content");

            var nodes=registry.findWidgets(this.widthPane.domNode);

            for(var i=0;i<nodes.length;i++)
            {
                this.widthPane.removeChild(nodes[i]);
            }

            for(var i=0;i<this.colCount;i++)
            {
                var textBox=new TextBox();
                domClass.add(textBox.domNode,'widthBox');
                textBox.watch('value',lang.hitch(this,function(name,oldValue,value){
                    this.setColumnWidth();
                }));
                this.widthPane.addChild(textBox);
            }
        },
        setColumnWidth:function(){
            var nodes=registry.findWidgets(this.widthPane.domNode);
            var valueArray=[],widthArray=[],sum=0;
            for(var i=0;i<nodes.length;i++)
            {
                var numVal=parseInt(nodes[i].get('value'));
                var val=isNaN(numVal)?0:numVal;
                sum +=val;
                valueArray.push(val);
            }
            for(var i=0;i<valueArray.length;i++)
            {
                widthArray.push(Math.round((valueArray[i]/sum)*100));
            }
            // console.log(valueArray);
            // console.log(widthArray);

            var rows=query('#content .table .row');

            for(var i=0;i<rows.length;i++){
                var cells=query('.cell',rows[i]);
                for(var j=0;j<cells.length;j++){
                   domStyle.set(cells[j],'width',widthArray[j]+'%');
                }
            }
        }

    })
});