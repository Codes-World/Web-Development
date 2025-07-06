// Write a program to find the largest number of an array?
function findLargestNumber() {
    var nums = [23,52,4,3,9,0,52,98,56,43,34];
    var largest = 0;
    for(var i = 0; i < nums.length-1; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    alert(largest);
}

//Write a program to find the smallest number of an array?
function findSmallestNumber() {
    var nums = [23,52,4,3,9,1,52,98,56,43,34];
    var smallest = nums[0];

    for(var i = 0; i < nums.length; i++){
        if(nums[i] < smallest){
            smallest = nums[i];
        }
    }
    alert(smallest);
}

//Write a program to find the sum array elements or numbers?
function sumArrayNumber() {
    var nums = [4,5,2,3,6,7];
    var sum = 0;

    for(var i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    alert(sum);
}

//Write a program to print numbers from 1 to 10?
function print1to10(){
    var print = document.getElementById("p-1-to-10");
    for(var i = 1; i <= 10; i++){
        print.innerHTML += i + " "; 
    }
}