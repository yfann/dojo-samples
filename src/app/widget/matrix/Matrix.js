define([
    'app/widget/box/TextBox',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/dom-construct',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'dojo/text!./templates/matrix-setting.html'
],function(TextBox,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,domC,declare,lang,on,template){
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


            for(var i=0;i<this.colCount;i++)
            {
                this.widthPane.addChild(new TextBox({class:'widthBox'}));
            }
        }

    })
});