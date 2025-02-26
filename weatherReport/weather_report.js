// 天気情報を表示する関数
function showweatherDetails(event) {
    event.preventDefault(); // フォームのデフォルト送信動作をキャンセル（ページ遷移しないようにする）

    // ユーザーが入力した都市名を取得
    const city = document.getElementById('city').value;

    // APIキーを指定（自分のAPIキーに置き換える必要がある）
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // 自分のAPIキーに置き換えてください

    // OpenWeatherMap APIのURLを作成（都市名、APIキー、摂氏温度の単位を指定）
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // fetch関数でAPIからデータを取得
    fetch(apiUrl)
        .then(response => response.json()) // レスポンスをJSON形式に変換
        .then(data => {
            // weatherInfoというIDを持つHTML要素を取得
            const weatherInfo = document.getElementById('weatherInfo');
            
            // 取得した天気データをHTMLに表示
            weatherInfo.innerHTML = `<h2>${data.name} の天気</h2>
                                     <p>気温: ${data.main.temp} &#8451;</p>
                                     <p>天気: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            // エラーハンドリング（API呼び出しに失敗した場合）
            console.error('天気情報の取得に失敗しました', error);
        });
}

// フォームの送信イベントが発生したときにshowweatherDetails関数を呼び出す
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
