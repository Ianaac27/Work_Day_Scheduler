//save txtarea input local storage ..
var inputTextarea = document.querySelector('.user-notes');
//  var inputTextarea1 = document.getElementById('notes1');
//  var inputTextarea2 = document.getElementById('notes2');
//  var inputTextarea3 = document.getElementById('notes3');
//  var inputTextarea4 = document.getElementById('notes4');
//  var inputTextarea5 = document.getElementById('notes5');
//  var inputTextarea6 = document.getElementById('notes6');
//  var inputTextarea7 = document.getElementById('notes7');
//  var inputTextarea8 = document.getElementById('notes8');
//  var inputTextarea9 = document.getElementById('notes9');
 var saveButton = document.querySelector('.saveBtn');

//  var inputArray = [];

// inputArray.push(inputTextarea1,inputTextarea2,inputTextarea3,inputTextarea4,inputTextarea5,inputTextarea6,inputTextarea7,inputTextarea8,inputTextarea9) 
 
// console.log(inputArray);

console.log(inputTextarea);

 saveButton.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content', inputTextarea.value);
     inputTextarea.textContent = inputTextarea.value;

     console.log(localStorage)
 })

 window.onload = function(){
      var savedInput = localStorage.getItem('content', inputTextarea.value);
      inputTextarea.textContent = savedInput;
  }


 //JQuery version?
 
//  $('.saveBtn').click(function(event) {
//     event.preventDefault()
//     localStorage.setItem('content', $('.user-notes').val());
//     $('.user-notes').textContent = $('.user-notes').val();
//     SaveBtn()
//  })

//  window.onload = function SaveBtn(){
//     $('.user-notes').textContent = localStorage.getItem('content', $('.user-notes').val());
//  }