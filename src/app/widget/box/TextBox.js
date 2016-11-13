define([
    'dijit/form/TextBox',
    'dojo/_base/declare'
],function(TextBox,declare){
    return declare('app.weidget.TextBox',[TextBox],{
        intermediateChanges : true
    })
});