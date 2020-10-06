//msg one by one 
$('li').hide();
$('li').each(function(index){
    $(this).delay(index*1000).fadeIn();
})
//click msg to change color
$('.left').click(function(){
    $(this).toggleClass('gray');
}).css('cursor','pointer');

$('.right').click(function(){
    $(this).toggleClass('orange');
}).css('cursor','pointer');

//click to show and hide msg 
//--> if i use html with same class whole msg is replaced, so maybe I should add sth
$('#hideBtn').click(function(){
    $('#messages').toggleClass('hide');

    if($('#messages').hasClass('hide')){
        $(this).html('Click to show messages');
        $('#chatBox').append("<h2>nothing to show >_<</h2>").addClass('nothing');
    }else {
        $(this).html('Click to hide messages');
        $('h2:contains("nothing")').remove(); 
        $('#chatBox').removeClass();
    }
})


// using button value...? not sure 
/*$('#hideBtn').click(function(){
    
    let label = $('#hideBtn').value();
    
    if(label =="hide"){
        $('#messages').value("show");
        $('#messages').hide();
    } else {
        $('#messages').value("hide");
        $('#messages').show();
    }
    });
*/

// disapper whole data when you click?--> should add all the msg again with html... hmm too messy 
/*let clicked = true;
$('#hideBtn').click(function(){
    if(clicked){
        $('#messages').addClass('hide');
        $('#messages').html('<h2> >_< (nothing here!)</h2>').addClass('show').addClass('nothing');
        $(this).html('Click to show messages')
        clicked = false;
    }else {
        $('#messages').removeClass('hide','show');
        $(this).html('Click to hide messages')
        clicked = true;
    }
});
*/