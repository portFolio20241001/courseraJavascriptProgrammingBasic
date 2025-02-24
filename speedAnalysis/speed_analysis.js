// タイピングテストの文章
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // テスト用の文章をセット
    document.getElementById("inputText").value = testText;

    // ユーザー入力エリアをクリアして編集可能にする
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus(); // 入力欄にカーソルをセット

    // 結果表示をリセット
    document.getElementById("output").innerHTML = "";
    
    // タイマー開始
    startTime = new Date().getTime();

    // ボタンの切り替え
    document.getElementById("startBtn").disabled = true;
    document.getElementById("endBtn").disabled = false;
}

function endTest() {
    // タイマー終了
    endTime = new Date().getTime();

    // 入力を禁止する
    let userInput = document.getElementById("userInput");
    userInput.readOnly = true;

    // 経過時間を計算（最低1秒は保証）
    let timeElapsed = (endTime - startTime) / 1000;
    if (timeElapsed < 1) timeElapsed = 1; // 1秒未満の場合は1秒として計算

    // ユーザーの入力を取得
    let userTypedText = userInput.value;

    // 単語数を数える（空白区切りでカウント）
    let typedWords = userTypedText.trim().split(/\s+/).filter(word => word !== "").length;

    // WPM (Words Per Minute) の計算
    let wpm = Math.round((typedWords / timeElapsed) * 60);

    // 結果を表示
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<h2>結果</h2>
        <p>入力した単語数: ${typedWords} 単語</p>
        <p>経過時間: ${timeElapsed.toFixed(2)} 秒</p>
        <p>タイピング速度 (WPM): ${wpm} WPM</p>`;

    // ボタンの切り替え
    document.getElementById("startBtn").disabled = false;
    document.getElementById("endBtn").disabled = true;
}
