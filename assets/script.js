//Text Areas
 var inputTextarea1 = $('#notes1')
 var inputTextarea2 = $('#notes2')
 var inputTextarea3 = $('#notes3')
 var inputTextarea4 = $('#notes4')
 var inputTextarea5 = $('#notes5')
 var inputTextarea6 = $('#notes6')
 var inputTextarea7 = $('#notes7')
 var inputTextarea8 = $('#notes8')
 var inputTextarea9 = $('#notes9')

 //Save Button click to local storage
  $('#button1').click(function(event) {
     event.preventDefault()
     localStorage.setItem('content1', inputTextarea1.val());
     inputTextarea1.text(inputTextarea1.val()); 
   })

   $('#button2').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content2', inputTextarea2.val());
    inputTextarea2.text(inputTextarea2.val()); 
  })

  $('#button3').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content3', inputTextarea3.val());
    inputTextarea3.text(inputTextarea3.val()); 
  })

  $('#button4').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content4', inputTextarea4.val());
    inputTextarea4.text(inputTextarea4.val()); 
  })

  $('#button5').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content5', inputTextarea5.val());
    inputTextarea5.text(inputTextarea5.val()); 
  })

  $('#button6').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content6', inputTextarea6.val());
    inputTextarea6.text(inputTextarea6.val()); 
  })

  $('#button7').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content7', inputTextarea7.val());
    inputTextarea7.text(inputTextarea7.val()); 
  })

  $('#button8').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content8', inputTextarea8.val());
    inputTextarea8.text(inputTextarea8.val()); 
  })

  $('#button9').click(function(event) {
    event.preventDefault()
    localStorage.setItem('content9', inputTextarea9.val());
    inputTextarea9.text(inputTextarea9.val()); 
  })

  //Display text on refresh
   window.onload = function() {
    var grabText1 = localStorage.getItem('content1', inputTextarea1.val());
    inputTextarea1.text(grabText1);

    var grabText2 = localStorage.getItem('content2', inputTextarea2.val());
    inputTextarea2.text(grabText2);

    var grabText3 = localStorage.getItem('content3', inputTextarea3.val());
    inputTextarea3.text(grabText3);

    var grabText4 = localStorage.getItem('content4', inputTextarea4.val());
    inputTextarea4.text(grabText4);

    var grabText5 = localStorage.getItem('content5', inputTextarea5.val());
    inputTextarea5.text(grabText5);

    var grabText6 = localStorage.getItem('content6', inputTextarea6.val());
    inputTextarea6.text(grabText6);

    var grabText7 = localStorage.getItem('content7', inputTextarea7.val());
    inputTextarea7.text(grabText7);

    var grabText8 = localStorage.getItem('content8', inputTextarea8.val());
    inputTextarea8.text(grabText8);

    var grabText9 = localStorage.getItem('content9', inputTextarea9.val());
    inputTextarea9.text(grabText9);
}

//Current date and time
var currentMoment = moment();
var date = $("#currentDay").text(currentMoment.format("MMM Do, YYYY"));
var today = $("#today").text(currentMoment.format("dddd"));
var currentHour = currentMoment.hour();

console.log( currentHour);

//Change of background color per row based off current time
$(".user-notes").each(function(){
    var colorHour = $(this).attr("row-color");
    
    if(colorHour < currentHour) {
    $(this).addClass("past");    
    }

    else if (colorHour == currentHour) {
    $(this).addClass("present");    
    }

    else {
    $(this).addClass("future");     
    }
});


