define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/on',
    'dgrid/Grid',
    'dgrid/OnDemandGrid',
    'dgrid/Selection',
    'dojo/store/Memory',
    'dstore/legacy/StoreAdapter',
    'dojo/_base/declare',
    'dojo/text!./templates/my-grid.html'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,on,Grid,OnDemandGrid,Selection,
Memory,StoreAdapter,declare,template){
    return declare('app.weidget.MyGrid',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        data:[
                { first: 'Bob', last: 'Barker', age: 89 ,order:1},
                { first: 'Vanna', last: 'White', age: 55 ,order:2},
                { first: 'Pat', last: 'Sajak', age: 65 ,order:3},
                { first: 'Fan', last: 'Sajak', age: 65 ,order:4},
                { first: 'Lee', last: 'Tan', age: 89 ,order:5},
                { first: 'Van', last: 'Tian', age: 55 ,order:6},
                { first: 'Vi', last: 'Vi', age: 65 ,order:7},
                { first: 'Pit', last: 'Pit', age: 65 ,order:8},
                { first: 'U', last: 'V', age: 89 ,order:9},
                { first: 'Wei', last: 'Dan', age: 55 ,order:10},
                { first: 'Hen', last: 'Ren', age: 65 ,order:11},
                { first: 'Hee', last: 'Sajak', age: 65 ,order:12},
                { first: 'Loo', last: 'Barker', age: 89 ,order:13},
                { first: 'Poo', last: 'White', age: 55 ,order:14},
                { first: 'Yuu', last: 'Sajak', age: 65 ,order:15},
                { first: 'Dk', last: 'Sajak', age: 65 ,order:16},
                { first: 'Lk', last: 'Barker', age: 89 ,order:17},
                { first: 'Po', last: 'White', age: 55 ,order:18},
                { first: 'Dev', last: 'Sajak', age: 65 ,order:19},
                { first: 'QS', last: 'Sajak', age: 65 ,order:20},
                { first: 'QE', last: 'Barker', age: 89 ,order:21},
                { first: 'Ui', last: 'White', age: 55 ,order:22},
                { first: 'Lili', last: 'Sajak', age: 65 ,order:23},
                { first: 'Papa', last: 'Sajak', age: 65 ,order:24}
            ],
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
            // this.grid=new OnDemandGrid({
            //     columns:columns,
            //     keepScrollPosition:true,
            //     selectionMode : 'multiple'
            //     // sort:[{
            //     //     descending:true,
            //     //     property:"order"
            //     // }]
            // },this.gridPoint);


            this.grid=new (declare([ OnDemandGrid, Selection ]))({
                columns:columns,
                keepScrollPosition:true,
                selectionMode : 'toggle'//single  multiple
            }, this.gridPoint);


            this.grid.on('dgrid-select', function (event) {
                var rows = event.rows;
                // for (var id in grid.selection) {
                //     if (grid.selection[id]) {
                //         // ...
                //     }
                // }
            });
            this.grid.on('dgrid-deselect', function (event) {
            });


            this.store = new Memory({
                data : this.data
            });

            this.grid.set('collection', new StoreAdapter({
                objectStore : this.store
            }));
        // grid.set("sort",function(a,b){
        //         if(a.order>b.order){
        //             return 1;
        //         }
        //         if(a.order<b.order){
        //             return -1;
        //         }
        //         return 0;
        //     });
        // grid.set("sort",[{
        //              descending:true,
        //              property:"age"
        //          }]);

        //grid.renderArray(this.data);

        var _this=this;
            on(this.buttonNode,'click',function(){
                _this.grid.set("sort",[{
                        descending:true,
                        property:"order"
                    }]);

              //_this.grid.set("sort","age",true);
            });


        }
    })
});