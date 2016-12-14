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

            //this.init();
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
            var initWidth=Math.floor(100/this.colCount);
            var lastColWidth=100-initWidth*(this.colCount-1);
            //offset
            //lastColWidth-=1;

            var table=domC.create("div",{className:"table"});
            var row,cell;
            for(var i=0;i<this.rowCount;i++)
            {
                row=domC.create("div",{className:"row"});
                for(var j=0;j<this.colCount;j++)
                {
                    cell=domC.create("div",{
                        className:"cell",
                        innerHTML:'&nbsp;'
                    });
                    domStyle.set(cell,'width',((j+1)==this.colCount?lastColWidth:initWidth)+'%');
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            domC.empty("content");
            domC.place(table,"content");

            domC.empty("contentHeader");
            table=domC.create("div",{className:"table"});
            row=domC.create("div",{className:"row"});
            for(var j=0;j<this.colCount;j++)
            {
                cell=domC.create("div",{
                    className:"cell"
                });
                domStyle.set(cell,'width',((j+1)==this.colCount?lastColWidth:initWidth)+'%');
                row.appendChild(cell);
            }
            table.appendChild(row);
            domC.place(table,"contentHeader");
            var cells=query('#contentHeader .table .row .cell');
            for(var i=0;i<this.colCount;i++)
            {
                var textBox=new TextBox();
                textBox.value=(i+1)==this.colCount?lastColWidth:initWidth;
                domClass.add(textBox.domNode,'widthBox');
                textBox.watch('value',lang.hitch(this,function(name,oldValue,value){
                    this.setColumnWidth();
                }));
                dojo.place(textBox.domNode,cells[i]);
            }
        },
        setColumnWidth:function(){
            var nodes=registry.findWidgets(dojo.byId('contentHeader'));
            var valueArray=[],lastColValue=100;
            for(var i=0;i<nodes.length-1;i++)
            {
                var numVal=parseInt(nodes[i].get('value'));
                var val=isNaN(numVal)?null:numVal;
                if(!val)
                {
                    return;
                }
                valueArray.push(val);
                lastColValue-=val;
            }
            valueArray.push(lastColValue);
            nodes[nodes.length-1].set('value',lastColValue)

            if(valueArray.length==this.colCount)
            {
               var rows=query('#content .table .row');

                for(var i=0;i<rows.length;i++){
                    var cells=query('.cell',rows[i]);
                    for(var j=0;j<cells.length;j++){
                        domStyle.set(cells[j],'width',(j+1)==cells.length?valueArray[j]:valueArray[j]+'%');
                    }
                }

                cells=query('#contentHeader .table .row .cell');
                for(var j=0;j<cells.length;j++){
                    domStyle.set(cells[j],'width',(j+1)==cells.length?valueArray[j]:valueArray[j]+'%');
                }

            }
        }

    })
});