define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/on',
    'dgrid/Grid',
    'dgrid/OnDemandGrid',
    'dgrid/Selector',
    'dojo/store/Memory',
    'dstore/legacy/StoreAdapter',
    'dojo/_base/lang',
    'dojo/dom',
    'dojo/_base/declare',
    'dojo/text!./templates/my-grid.html',
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,on,Grid,OnDemandGrid,Selector,
Memory,StoreAdapter,lang,dom,declare,template){
    return declare('app.weidget.MyGrid',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        selectedRow:null,
        data:[
                { id:1,first: 'Bob', last: 'Barker', age: 89 ,order:1},
                { id:2,first: 'Vanna', last: 'White', age: 55 ,order:2},
                { id:3,first: 'Pat', last: 'Sajak', age: 65 ,order:3},
                { id:4,first: 'Fan', last: 'Sajak', age: 65 ,order:4},
                { id:5,first: 'Lee', last: 'Tan', age: 89 ,order:5},
                { id:6,first: 'Van', last: 'Tian', age: 55 ,order:6},
                { id:7,first: 'Vi', last: 'Vi', age: 65 ,order:7},
                { id:8,first: 'Pit', last: 'Pit', age: 65 ,order:8},
                { id:9,first: 'U', last: 'V', age: 89 ,order:9},
                { id:10,first: 'Wei', last: 'Dan', age: 55 ,order:10},
                { id:11,first: 'Hen', last: 'Ren', age: 65 ,order:11},
                { id:12,first: 'Hee', last: 'Sajak', age: 65 ,order:12},
                { id:13,first: 'Loo', last: 'Barker', age: 89 ,order:13},
                { id:14,first: 'Poo', last: 'White', age: 55 ,order:14},
                { id:15,first: 'Yuu', last: 'Sajak', age: 65 ,order:15},
                { id:16,first: 'Dk', last: 'Sajak', age: 65 ,order:16},
                { id:17,first: 'Lk', last: 'Barker', age: 89 ,order:17},
                { id:18,first: 'Po', last: 'White', age: 55 ,order:18},
                { id:19,first: 'Dev', last: 'Sajak', age: 65 ,order:19},
                { id:20,first: 'QS', last: 'Sajak', age: 65 ,order:20},
                { id:21,first: 'QE', last: 'Barker', age: 89 ,order:21},
                { id:22,first: 'Ui', last: 'White', age: 55 ,order:22},
                { id:23,first: 'Lili', last: 'Sajak', age: 65 ,order:23},
                { id:24,first: 'Papa', last: 'Sajak', age: 65 ,order:24}
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
                                },
                                {
                                    field: 'order',
                                    label: 'Order'
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


            this.grid=new (declare([ OnDemandGrid, Selector ]))({
                columns:columns,
                keepScrollPosition:true,
                selectionMode : 'single'//single  multiple
            }, this.gridPoint);


            this.grid.on('dgrid-select', lang.hitch(this,function (event) {
                var rows = event.rows;
                this.selectedRow=rows[0];
                // for (var id in grid.selection) {
                //     if (grid.selection[id]) {
                //         // ...
                //     }
                // }
            }));
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

            on(this.buttonNode,'click',lang.hitch(this,function(){
                this.sort();
              //_this.grid.set("sort","age",true);
            }));

            on(this.upNode,'click',lang.hitch(this,function(){
                this.goUp();
            }));

            on(this.downNode,'click',lang.hitch(this,function(){
                this.goDown();
            }));

        },
        sort:function(){
             this.grid.set("sort",[{
                        descending:false,
                        property:"order"
                    }]);
            this.grid.select(dom.byId(this.selectedRow.element.id));
            console.log(this.selectedRow.element);
        },
        goUp:function(){
            var target=target=this.store.query({id:this.selectedRow.id})[0];
            // for (var id in this.grid.selection) {
            //     if (this.grid.selection[id]) {
            //         target=this.store.query({id:id})[0];
            //         break;
            //     }
            // }
            if(target.order>1){
                var sibling=this.store.query({order:target.order-1})[0];
                var temp=target.order;
                target.order=sibling.order;
                sibling.order=temp;
                this.store.put(target);
                this.store.put(sibling);
                this.sort();
            }
        },
        goDown:function(){
            var target=target=this.store.query({id:this.selectedRow.id})[0];
            // for (var id in this.grid.selection) {
            //     if (this.grid.selection[id]) {
            //         target=this.store.query({id:id})[0];
            //         break;
            //     }
            // }
            if(target.order>1){
                var sibling=this.store.query({order:target.order+1})[0];
                var temp=target.order;
                target.order=sibling.order;
                sibling.order=temp;
                this.store.put(target);
                this.store.put(sibling);
                this.sort();
            }
        }

    })
});