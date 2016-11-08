define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dgrid/Grid',
    'dojo/_base/declare',
    'dojo/text!./templates/my-grid.html'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Grid,declare,template){
    return declare('app.weidget.MyGrid',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        postCreate:function(){
            var columns = [
                                {
                                    field: 'first',
                                    label: 'First Name'
                                },
                                {
                                    field: 'last',
                                    label: 'Last Name'
                                },
                                {
                                    field: 'age',
                                    label: 'Age'
                                }
                            ];
            var data = [
                { first: 'Bob', last: 'Barker', age: 89 },
                { first: 'Vanna', last: 'White', age: 55 },
                { first: 'Pat', last: 'Sajak', age: 65 }
            ];

            var grid=new Grid({columns:columns},this.gridPoint);

            grid.renderArray(data);
        }
    })
});