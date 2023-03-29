console.log("Q1 START =====================")

/* Question 1 */
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

function getposition(arr,elem){
    let position = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]==elem){
            position.push(i)
        }
    }
    if(position.length == 1){
        return position[0]
    }else if(position.length >1){
        return position
    }else if(position.length == 0){
        return -1
    }
}
let result = getposition([1,2,3,4,5,1,3],4)
let result1 = getposition([1,2,3,4,5,1,3],1)
let result2 = getposition([1,2,3,4,5,1,3],7)
console.log(result)
console.log(result1)
console.log(result2)

console.log("Q1 END =====================")

console.log("Q2 START =====================")

/* Question 2: */
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

let rows = 5;
let pattern = "";

for(let i=1; i<=rows; i++){
    for(let j=5; j>=i; j--){
        pattern+=j;
    }
    pattern+="\n";
}
console.log(pattern);


console.log("Q2 END =====================")

console.log("Q3 START =====================")

/* Question 3: */
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

let arr = [3,2,1,4,5,45]
function compare(a,b){
    if(a>b){
        return 1
    }
    else if(b>a){
        return -1
    }
    else{
        return 0
    }
}
console.log(arr.sort(compare))
console.log("Q3 END =====================")

console.log("Q4 START =====================")

/* Question 4: */
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

function Anagram(str1,str2){
    let n1 = str1.length;
    let n2 = str2.length;
    if(n1!=n2){
        return false;
    }
    str1.sort();
    str2.sort();
    for(var i=0; i<n1; i++)
    if(str1[i]!=str2[i]){
        return false;
    }
    return true;
}
var str1=["L","I","S","T","E","N"];
var str2=["S","I","L","E","N","T"];
if(Anagram(str1,str2)){
    console.log("True")
}
else{
    console.log("false")
}

function Anagram(Str1,Str2){
    var n1 = str1.length;
    var n2 = str2.length;
    if(n1!=n2){
        return false;
    }
    str1.sort();
    str2.sort();
    for(var i=0; i<n1; i++)
    if(str1[i]!=str2[i]){
        return false;
    }
    return true;
}
var str1=["H","E","L","L","O"];
var str2=["J","E","L","L","0"];
if(Anagram(str1,str2)){
    console.log("true")
}
else
{
    console.log("False")
}

console.log("Q4 END =====================")
console.log("Q5 START =====================")

/* Question 5: */
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

// function reverseString(str){
//     var newString="";
//     for(var i=str.length-1; i>=0; i--){
//         newString+=str[i];
//     }
//     return newString;
// }
// var string = ('Hello');
// var Result = reverseString(string);
// console.log(result);
let myString="hello"
let finalString="" // assign any variable
for (let i=myString.length-1 ; i>=0; i--){
    finalString += myString[i]

    console.log(myString[i])
}

console.log("Q5 END =====================")