var arr=[-1,-1,-1,-1,-1];
var sum=0,numOfEle=0;
for(var i=0;i<arr.length;i++){
    var temp=Math.floor(Math.random()*100);
    arr[i]=temp;
    sum+=temp;
    numOfEle++;
}

console.log("Sum of Numbers "+sum);
console.log("Average of Numbers "+sum/numOfEle);