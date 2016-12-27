define([
    "dojox/mdnd/dropMode/OverDropMode",
    'dojo/_base/declare',
    "dojox/mdnd/AreaManager"
    ],function(OverDropMode,declare,AreaManager){
    var nodm= declare('app.segment.dragsegment.NestOverDropMode',
    [
        OverDropMode
    ],{
        getTargetArea:function(/*Array*/areaList, /*Object*/ coords, /*integer*/currentIndexArea ){   
            //return this.inherited(arguments);
			var index = 0;
			var x = coords.x;
			var y = coords.y;
            var selectedArea=[],selectedIndexes=[];

            for(var i=0;i<areaList.length;i++){
                if(this._checkInterval(areaList, i, x, y)){
                    selectedArea.push(areaList[i]);
                    selectedIndexes.push(i);
				}
            }

            if(selectedIndexes.length==1){
                index=selectedIndexes[0];
            }else if(selectedIndexes.length>1){
                //basically the situation is one area contains another area. Return the nested area.
                if(this._checkAreaInclude(selectedArea[0],selectedArea[1])){
                    index=selectedIndexes[1];
                }else{
                    index=selectedIndexes[0];
                }
            }else{
                index=-1;
            }

            console.log(areaList);
            console.log(index);
            return index;
        },
        _checkAreaInclude:function(areaContainer,areaElement){
            if(areaContainer.coords.x<=areaElement.coords.x &&
               (areaContainer.coords.x+areaContainer.node.offsetWidth)>=(areaElement.coords.x+areaElement.node.offsetWidth) && 
               areaContainer.coords.y<=areaElement.coords.y &&
               (areaContainer.coords.y+areaContainer.node.offsetHeight)>=(areaElement.coords.y+areaElement.node.offsetHeight)){
                return true;
            }else{
                return false;
            }
        }
    });


    AreaManager.areaManager()._dropMode = new nodm();
	return nodm;
});