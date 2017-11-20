var fileselected = false;
function handleFiles(input){
    fileselected = true;
//use input
}

var interval;
function browse(){
    fileselected = false;
    var fileElem = document.getElementById("inFile");
    fileElem.click();
    interval = setInterval(setdiv, 500);

}
function setdiv(){
    if(!fileselected){  
        //do staff until user decides to Dnd or  browse for file again
        clearInterval(interval);
    }   
}