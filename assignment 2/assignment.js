//question 1


const array=[1,2,3,4,5,6,7,80,9,10,11,12,130,14,15,16,17,18,19,20];
//question 1

function findSum(){
 let sum=0;
    for(let i=0;i<array.length;i++){
       
        sum+=array[i];
    }

    document.getElementById('q1').innerHTML="the sum of array elements is " +sum;
}
//question 2
function findMax(){
let max=0
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        else
        {
            max=max;   
        }
       
        
    }
document.getElementById("q2").innerHTML="The maximum among the array is"+max;
}
//question 3
document.getElementById("q3").innerHTML=" Un Sorted array is"+ array;
function ascending(){
    array.sort((a, b) => a - b);
    document.getElementById("q3").innerHTML="The sorted array"+array;
}
