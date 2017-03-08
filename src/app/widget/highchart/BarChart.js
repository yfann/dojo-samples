define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/declare',
    'dojo/on',
    'dojo/_base/lang',
'dojo/dom-style', 
    'dojo/text!./templates/chart-demo.html',
    //'dojo/domReady!',
    'highcharts'
],function(_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,declare,on,lang,domStyle,template){
    return declare('app.widget.highchart.BarChart',[
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin
    ],{
        templateString:template,
        chart:null,
        postCreate:function(){
            //  domStyle.set(this.chartNode,'width','90%');
            //  domStyle.set(this.chartNode,'height','90%');

                 setTimeout(lang.hitch(this,function(){
                   //this.chart.reflow();
this.chart=Highcharts.chart(this.chartNode, {
                title: {
                    text: 'Highcharts pie chart'
                },

                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                credits : {
                    enabled : false
                },
                series: [{
                    type: 'bar',
                    allowPointSelect: true,
                    keys: ['name', 'y', 'selected', 'sliced'],
                    colorByPoint: true,
                    data: [
                    ['Apples', 29.9, false],
                    ['Pears', 71.5, false],
                    ['Oranges', 106.4, false],
                    ['Plums', 129.2, false],
                    ['Bananas', 144.0, false],
                    ['Peaches', 176.0, false],
                    ['Prunes', 135.6, true],
                    ['Avocados', 148.5, false]
                    ],
                    showInLegend: true
                }]
                });

                   
                 }),0);

                // on(this.buttonNode,'click',lang.hitch(this,function(){
                    
                // }));
        },
        startup:function(){

        }
    });
});