let a=9;
let b=9,c=9,d=9;

let foption=a+b*c;
let soption=a%b+c;
let toption=c+a/b;
let loption=a*b+c;
// find Maximum
if(foption>soption && foption>toption && foption>loption)
{
    console.log("First option is Maximum");
}else if(soption>foption && soption>toption && soption>loption)
{
    console.log("Second option is Maximum");
}else if(toption>soption && toption>foption && toption>loption)
{
    console.log("Third option is Maximum");
}else
{
    console.log("Fourth option is Maximum");
}

//Find minimum

if(foption<soption && foption<toption && foption<loption)
{
    console.log("First option is Minimum");
}else if(soption<foption && soption<toption && soption<loption)
{
    console.log("Second option is Minimum");
}else if(toption<soption && toption<foption && toption<loption)
{
    console.log("Third option is Minimum");
}else
{
    console.log("Fourth option is Minimum");
}

