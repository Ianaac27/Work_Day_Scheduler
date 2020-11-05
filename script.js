//save txtarea input local storage ..
 var inputTextarea = document.querySelector('.user-notes');
 var saveButton = document.querySelector('.saveBtn');
    
 saveButton.addEventListener('click', function (event) {
     event.preventDefault()
     localStorage.setItem('content', inputTextarea.value);
     inputTextarea.textContent = inputTextarea.value;
     SaveBtn()

     console.log(localStorage)
 })

 window.onload = function SaveBtn(){
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