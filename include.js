@mixin function include(site){
    $.ajax({
        url: site+'.html', // リクエストを送信するURLを指定
        async: false, // 非同期リクエストを無効にする
    }).done(function(site_html){ // 通信が成功したら
        document.write(site_html); // herder.htmlを表示する
    });
}