// function diff(arr1, arr2){
//     var holderArray = [];

//     for(var i=0; i<arr1.length; i++){
//         if(arr2.indexof(arr[i])===-1){

//             holderArray.push(arr[i]);
//         }
//     }

//     for(var j=0; j<arr2.length;j++){
//         if(arr1.indexof(arr2[j])===-1){
//             holderArray.push(arr[j]);
//         }
//     }
//     return holderArray
// }

// diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);





// function eventSetup (){
// var content = document.getElementById('content');

// var button = document.getElementById('show-more')

//   button.onclick = function(){
//     if(content.className == 'open'){
//         content.className = '';
//         button.innerHTML = 'show more'
//     } else{
//         content.className = 'open'
//         button.innerHTML = 'show less'
//     }
//   }
// }

// window.onload = function(){
//     eventSetup();
// }




// function largestOfFour(arr) {
//     var largestArray = [];

//     for (var i=0;i<arr.length;i++){
//         var largestNumber=0;
//         for(var j=0; j<arr.length; j++){
//             if(largestNumber<arr[i][j]){
//                 largestNumber=arr[i][j];
//             }
//         }
//         return largestArray;
//     }
//     largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// }