let arr=[-1,-1,-1,-1,-1];

//Get Random values
arr[0]=Math.floor(Math.random()*100);
arr[1]=Math.floor(Math.random()*100);
arr[2]=Math.floor(Math.random()*100);
arr[3]=Math.floor(Math.random()*100);
arr[4]=Math.floor(Math.random()*100);

let minimum=100000000,maximum=0;

//Find maximum and minimum
for(let i=0;i<arr.length;i++){
    if(arr[i]<minimum){
        minimum=arr[i];
    }else if(arr[i]>maximum){
        maximum=arr[i];
    }
}

console.log(minimum);
console.log(maximum);