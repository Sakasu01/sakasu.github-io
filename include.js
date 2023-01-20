function include(target){
    $.ajax({
        url: target, // リクエストを送信するURLを指定
        async: false, // 非同期リクエストを無効にする
    }).done(function(target){ // 通信が成功したら
        document.write(target); // herder.htmlを表示する
    });
}