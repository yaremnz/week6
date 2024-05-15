let times = 1;
function compareAscendingNumber(a, b) {
    console.log(times++, a, b);
    //return a - b; //b-a is reverse
    

    if (a > b) {
        return -1;
    }else if (a==b){

     return 0;
    }else{
        return 1;
    }
}
let numbers = [3,27,400,1,111,5];
// numbers.sort(compareAscendingNumber);
numbers.sort((a,b)=> a - b);  //simple inline sort for numbers
console.log(numbers);