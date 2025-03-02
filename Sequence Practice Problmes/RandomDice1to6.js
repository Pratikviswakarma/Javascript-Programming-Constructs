var val=-1;
while(true){
    if(val>=1 && val<=6){
        break;
    }
    val=Math.floor(Math.random()*10);
}
console.log(val);