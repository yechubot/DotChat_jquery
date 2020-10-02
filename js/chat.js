//msg one by one 
$('li').hide();
$('li').each(function(index){
    $(this).delay(index*1000).fadeIn();
})

$('.left').click(function(){
    $(this).toggleClass('gray');
}).css('cursor','pointer');

$('.right').click(function(){
    $(this).toggleClass('orange');
}).css('cursor','pointer');

// $('#hideBtn').click(function(){
//     $('#messages').slideToggle(500);
// })

let clicked = true;
$('#hideBtn').click(function(){
    if(clicked){
        $('#messages').addClass('hide');
        $('#messages').html('<h2> >_< (nothing here!)</h2>').addClass('show').addClass('nothing');
        $(this).html('Click to show messages')
        clicked = false;
    }else {
        $('#messages').removeClass();
        $(this).html('Click to hide messages')
        clicked = true;
    }
})
