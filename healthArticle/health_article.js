var xhr = new XMLHttpRequest(); // XMLHttpRequest オブジェクトを作成

var url = './health_article.json'; // 取得する JSON ファイルの URL を指定

xhr.open('GET', url, true); // 非同期で GET リクエストを設定

xhr.responseType = 'json'; // レスポンスのデータ型を JSON に設定

xhr.onload = function() { // リクエストが完了したときに実行される処理
  if (xhr.status >= 200 && xhr.status < 300) { // ステータスコードが成功範囲 (200-299) の場合
    var articles = xhr.response.articles; // レスポンスデータから記事情報を取得
    var articlesDiv = document.getElementById('articles'); // 記事を表示する div を取得

    articles.forEach(function(article) { // 各記事データに対して処理を実行
      var articleDiv = document.createElement('div'); // 記事用の div を作成
      articleDiv.classList.add('article'); // div に 'article' クラスを追加

      var title = document.createElement('h2'); // 記事タイトル用の h2 要素を作成
      title.textContent = article.title; // タイトルのテキストを設定

      var description = document.createElement('p'); // 記事の説明文用の p 要素を作成
      description.textContent = article.description; // 説明文のテキストを設定

      var waysHeader = document.createElement('h3'); // 方法一覧の見出し用 h3 要素を作成
      waysHeader.textContent = 'Ways to Achieve:'; // 見出しのテキストを設定

      var waysList = document.createElement('ul'); // 方法一覧の ul 要素を作成
      article.ways_to_achieve.forEach(function(way) { // 各方法をリストに追加
        var listItem = document.createElement('li'); // li 要素を作成
        listItem.textContent = way; // 方法のテキストを設定
        waysList.appendChild(listItem); // ul に li を追加
      });

      var benefitsHeader = document.createElement('h3'); // 効果一覧の見出し用 h3 要素を作成
      benefitsHeader.textContent = 'Benefits:'; // 見出しのテキストを設定

      var benefitsList = document.createElement('ul'); // 効果一覧の ul 要素を作成
      article.benefits.forEach(function(benefit) { // 各効果をリストに追加
        var listItem = document.createElement('li'); // li 要素を作成
        listItem.textContent = benefit; // 効果のテキストを設定
        benefitsList.appendChild(listItem); // ul に li を追加
      });

      articleDiv.appendChild(title); // 記事 div にタイトルを追加
      articleDiv.appendChild(description); // 記事 div に説明文を追加
      articleDiv.appendChild(waysHeader); // 記事 div に方法の見出しを追加
      articleDiv.appendChild(waysList); // 記事 div に方法リストを追加
      articleDiv.appendChild(benefitsHeader); // 記事 div に効果の見出しを追加
      articleDiv.appendChild(benefitsList); // 記事 div に効果リストを追加

      articlesDiv.appendChild(articleDiv); // 記事全体を表示領域に追加
    });
  } else {
    console.error('Failed to load articles:', xhr.statusText); // エラーハンドリング
  }
};

xhr.onerror = function() { // リクエストエラー時の処理
  console.error('Request failed'); // エラーメッセージを出力
};

xhr.send(); // リクエストを送信
