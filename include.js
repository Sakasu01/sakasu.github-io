function include(target){
    console.log(target);
    $.ajax({
        url: target+'.html', // リクエストを送信するURLを指定
        async: false, // 非同期リクエストを無効にする
    }).done(function(target_html){ // 通信が成功したら
        document.write(target_html); // herder.htmlを表示する
    });
}