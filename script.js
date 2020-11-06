 //Text Areas
 var inputTextarea1 = document.getElementById('notes1');
 var inputTextarea2 = document.getElementById('notes2');
 var inputTextarea3 = document.getElementById('notes3');
 var inputTextarea4 = document.getElementById('notes4');
 var inputTextarea5 = document.getElementById('notes5');
 var inputTextarea6 = document.getElementById('notes6');
 var inputTextarea7 = document.getElementById('notes7');
 var inputTextarea8 = document.getElementById('notes8');
 var inputTextarea9 = document.getElementById('notes9');

 //Save Buttons
 var saveButton1 = document.getElementById('button1');
 var saveButton2 = document.getElementById('button2');
 var saveButton3 = document.getElementById('button3');
 var saveButton4 = document.getElementById('button4');
 var saveButton5 = document.getElementById('button5');
 var saveButton6 = document.getElementById('button6');
 var saveButton7 = document.getElementById('button7');
 var saveButton8 = document.getElementById('button8');
 var saveButton9 = document.getElementById('button9');

 //Save Button functions to local storage
 saveButton1.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content1', inputTextarea1.value);
     inputTextarea1.textContent = inputTextarea1.value;
 })

 saveButton2.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content2', inputTextarea2.value);
     inputTextarea2.textContent = inputTextarea2.value;
 })

 saveButton3.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content3', inputTextarea3.value);
     inputTextarea3.textContent = inputTextarea3.value;
 })

 saveButton4.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content4', inputTextarea4.value);
     inputTextarea4.textContent = inputTextarea4.value;
 })

 saveButton5.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content5', inputTextarea5.value);
     inputTextarea5.textContent = inputTextarea5.value;
 })

 saveButton6.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content6', inputTextarea6.value);
     inputTextarea6.textContent = inputTextarea6.value;
 })

 saveButton7.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content7', inputTextarea7.value);
     inputTextarea7.textContent = inputTextarea7.value;
 })

 saveButton8.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content8', inputTextarea8.value);
     inputTextarea8.textContent = inputTextarea8.value;
 })

 saveButton9.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content9', inputTextarea9.value);
     inputTextarea9.textContent = inputTextarea9.value;
 })

 console.log(localStorage);

 //Display on refresh
 window.onload = function() {
     inputTextarea1.textContent = localStorage.getItem('content1', inputTextarea1.value);
     inputTextarea2.textContent = localStorage.getItem('content2', inputTextarea2.value);
     inputTextarea3.textContent = localStorage.getItem('content3', inputTextarea3.value);
     inputTextarea4.textContent = localStorage.getItem('content4', inputTextarea4.value);
     inputTextarea5.textContent = localStorage.getItem('content5', inputTextarea5.value);
     inputTextarea6.textContent = localStorage.getItem('content6', inputTextarea6.value);
     inputTextarea7.textContent = localStorage.getItem('content7', inputTextarea7.value);
     inputTextarea8.textContent = localStorage.getItem('content8', inputTextarea8.value);
     inputTextarea9.textContent = localStorage.getItem('content9', inputTextarea9.value);
  }


//JQuery version?

// var inputTextarea1 = $('notes1')

//  $('.saveBtn').click(function(event) {
//     event.preventDefault()
//     localStorage.setItem('content', inputTextarea1.val());
//     inputTextarea1.text(inputTextarea1.val()); 
    
//   })

//   var grabText1 = localStorage.getItem('content', inputTextarea1.val());
//   window.onload = function() {
//     inputTextarea1.text(grabText1);
// }

var currentMoment = moment();
var today = $("#currentDay").text(currentMoment.format("MMM Do, YYYY"));
var currentHour = currentMoment.hour();

console.log( currentHour);