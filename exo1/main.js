var count = 0;

$('#clickclick').click(function() {
    count++;
    $('input').val(+count);
});


// $("#update").click(function() {
//     count += 120; // increase by 120
//     $("#counter").html("My current count is: "+count);
// });