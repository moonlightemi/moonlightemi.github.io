jQuery('.scroll_to').click(function(e){
2
    var jump = $(this).attr('href');
3
    var new_position = $(jump).offset();
4
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
5
    e.preventDefault();
6
});
