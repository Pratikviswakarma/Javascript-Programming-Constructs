var val=-1;
var val2=-1;
while(true){
    if((val>=1 && val<=6)&& (val2>=1 && val2<=6)){
        break;
    }
    val=Math.floor(Math.random()*10);
    val2=Math.floor(Math.random()*10);
}
console.log(val+val2);