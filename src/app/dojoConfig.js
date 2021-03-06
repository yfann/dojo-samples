
dojoConfig = {
    cacheBust : true,
    useCommentedJson : false,
    parseOnLoad : true,
    isDebug : false,
    baseUrl : './',
    paths : {
        dojo : 'lib/dojo',
        dijit : 'lib/dijit',
        dojox : 'lib/dojox',
        dgrid : 'lib/dgrid',
        xstyle : 'lib/xstyle',
        dstore : 'lib/dstore',
        'put-selector' : 'lib/put-selector',
        handlebars : 'lib/handlebars/handlebars',
        jquery : 'lib/jquery/jquery',
        app : 'app',
        //highcharts:'lib/highcharts/highcharts'
        highcharts:'lib/highcharts/js/highcharts'
    },
    has : {
        'dojo-firebug' : false,
        'dojo-debug-messages' : true
    },
    // locale : 'zh'
};
