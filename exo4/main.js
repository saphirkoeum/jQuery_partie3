$('#button2').click(function() {
    $('#divColor').hide();
});
    
$('#button3').click(function() {
    $('#divColor').css('color','red');

});

$('#button4').click(function() {
    $(#divColor').css('color','#ffc107');
});

$('#button5').click(function() {
    $('#divColor').show();
});

// random color
// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();
