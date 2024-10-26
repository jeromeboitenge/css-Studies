//question 1


const array=[1,2,3,4,5,6,7,80,9,10,11,12,130,11,15,16,17,18,19,20];
document.getElementById('array1').innerHTML=
"The initial array is "+array;
//question 1

function findSum(){
 let sum=0;
    for(let i=0;i<array.length;i++){
       
        sum+=array[i];
    }
    

    document.getElementById('q1').innerHTML=
    "the sum of array elements is " +sum;
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
document.getElementById("q2").innerHTML=
"The maximum among the array is"+max;
}
//question 3
document.getElementById("q3").innerHTML=
" Un Sorted array is"+ array;
function ascending(){
   let sortedArray= array.sort((a, b) => a - b);
    document.getElementById("q3").innerHTML=
    "The sorted array"+sortedArray;
}
//question 4
function reverseArray(){
    const reversed = array.reverse();

document.getElementById('q4').innerHTML=
"The reversed element is "+reversed;

}
//question 5
function arrangeEven(){
    let evenArray=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2==0){
            evenArray.push(array[i]);
        }
    }
   document.getElementById('q5').innerHTML=
   "the Even array Generated is "+evenArray;
}
//Question 6
function arrangeOdd(){
    let oddArray=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2!=0){
            oddArray.push(array[i]);
        }
    }
   document.getElementById('q6').innerHTML=
   "the Odd array Generated is "+oddArray;
}
//question 7

function findAverage(){
    let sum=0;
    let average=0;
       for(let i=0;i<array.length;i++){
          
           sum+=array[i];
       }
       average=sum/array.length;
       
   
       document.getElementById('q7').innerHTML=
       "The Average of array elements is " +average;
   }
   //Question 8
   function removeDuplicates(){
    const viewed=[];
    const aDuplicatedArray=[];
    array.forEach(value => {
        if(!viewed[value]){
            viewed[value]=true;
            aDuplicatedArray.push(value);
        }
    });

    document.getElementById('q8').innerHTML=
    "The Un Duplicated  array elements is " +aDuplicatedArray;
    
   }
   //Question 9
   function findMedian(){
    let median;
    
        if(array.length%2==0){
            median=(array[array.length/2]+array[(array.length/2)+1])/2;
        
    }  
    else
    {
        median=array[Math.floor(array.length/2)]
    }
    document.getElementById('q9').innerHTML=
    "The median of the  array elements is " +median;
 }
 //Question 10 Doubling the array elements.
 function doubleArray(){
    let doubledArray=[];
    for(let i=0;i<array.length;i++){
         doubledArray.push(array[i]*2);
       
    }
   
    document.getElementById('q10').innerHTML=
    "The Doubled   array elements is " +doubledArray;
 }
 
//Array of strings
const names=['boitenge','jerome','aldrin','Kafuluta','Theonce','Khabibu','Khassim',
    'Shariff','Jackson','Blaise','bosco','Pilote','Jmv','Nyangez','Damascene','Rene'
    ,'Emmy','Patric','Khamuza','Salimath'];
    //Qustion 11
    function displayNames(){
        for(let i=0;i<names.length;i++){
           document.getElementById('q11').innerHTML +=
           names[i]+' <br>';
           
           
        }
        

      
    }
    displayNames();
    //question 12
    function arrangeNames(){
        const sortedNames=names.sort((a,b) => a.localeCompare(b));
        document.getElementById('q12').innerHTML=
        " The alphabetical names are "+sortedNames+'<br>';
        
    }
    arrangeNames();
    //Question 13
    function searchName(){
        const verify="Rene";
        let feedback=false;
        for(let i=0;i<names.length;i++){
             if(names[i]==verify){
                feedback=true;
                break;
                
             }
             
            }
            document.getElementById('q13').innerHTML=feedback;
    }
    
    searchName();
    //Question 14
    function findLargeName(){
        let long=names[0];
        for(let i=0;i<names.length;i++){
            if(names[i].length>long.length){
                long=names[i];
            }
            else
            {
                long=long;
            }
        }
       document.getElementById('q14').innerHTML=
       "the largest name in the arrray is "+long;
    }
    findLargeName();
    //Qustion 15
    function searchStart(){
        let start="b";
        let found=[];
        for(let i=0;i<names.length;i++){
            if(names[i].startsWith(start)){
                found.push(names[i]);
            }
        }
        
        document.getElementById('q15').innerHTML=
        "The names in the arrray started with "+start +"are "+found;
    }
    searchStart();
    //question 16
    function upperlisee(){
        const upperlisedArray=[];
        for(let i=0;i<names.length;i++){
            upperlisedArray.push(names[i].toUpperCase());
        }    
            document.getElementById('q16').innerHTML=
            "the upperlised array is "+upperlisedArray;
    }
    upperlisee();
    // question 17
    function removeName() {
        const remove = 'Rene';
        const index = names.indexOf(remove); 
     remainingNames=names;
        if (index !== -1) { 
            remainingNames.splice(index, 1); 
        }
        
        document.getElementById('q17').innerHTML=
        "The remaining names from the array are "+remainingNames;
        
    }
    
    removeName();
    //Question 18
    function CountFound(){
        let count=0;
        for(let i=0;i<names.length;i++){
            if(names[i].includes('a')){
                count +=1;
            }
        }
        document.getElementById('q18').innerHTML=
        "The names with letter a are "+count;
       
    }
    CountFound();
    //Question 19
    function singleString(){
        let string='';
        for(let i=0;i<names.length;i++){
            string +=names[i]+',';
        }
      document.getElementById('q19').innerHTML=
      "the string of all array names is"+string;
      
    }
    singleString();
    //Question 20
    let ff=names;
    function reverseString(){
       
        const reversedNames=ff.reverse();
        document.getElementById('q20').innerHTML="The reversed names of the array is"+reversedNames;
        
    }
    reverseString();
    //Question 21
    const person=
    {name:"Florance",
     age:23,
     occupation:"student"

    };
    // console.log(person);
//Question 22(
function  take(){
    let obj=person.name +" "+person.age +" "+ person.occupation;
    // console.log(obj);
}

take();
//Question 23
function addPropert(){
    person.gender="female";
    // console.log(person);
}
addPropert();
//Question 24
function removeProperty(){
    delete person.age;
    // console.log(person);
}
removeProperty();
//question 25
function display(){
    // console.log(person);
}
display();
//question 26
function mergeObj(){
    let address={
        tel:'0782433539',
        email:'niyoduflorence@gmail.com',
        location:'kigali'
    };
    let peaple={...person,...address};
    // console.log(peaple);
}

mergeObj();
//Question 27

function checkProperty(){
    let chech=("pie" in person);
   document.getElementById('q27').innerHTML=chech;
}
checkProperty();
//question 28
function cloneObject(){
    let clone=Object.assign({},person);
   document.getElementById('q28').innerHTML=
   "the cloned object is clone "+clone;
}
cloneObject();
//Question 29


