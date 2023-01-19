function blogcard(){
    $.ajax({
        url: "./blogcard.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}