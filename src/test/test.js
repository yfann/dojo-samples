function Bind(func,context){
    return function(){
        func.apply(context,arguments);
    };
}


function aa(a,b,c)
{
    console.log(a+' '+b+' '+c);
}

var c={};

var b=Bind(aa,c);

b(1,2,3);