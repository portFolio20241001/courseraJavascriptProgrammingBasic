// ボタンの取得を関数外で行う
const submitButton = document.getElementById('submitBtn');

// クリックイベントを登録
submitButton.onclick = submitFeedback;

// フィードバック送信時に実行される関数
function submitFeedback() {
    // 各入力フィールドの値を取得（ユーザーが入力したデータを取得する）
    const username = document.getElementById('name').value; // 名前を取得
    const age = document.getElementById('age').value; // 年齢を取得
    const email = document.getElementById('email').value; // メールアドレスを取得
    const job = document.getElementById('job').value; // 職業を取得
    const designation = document.getElementById('designation').value; // 役職を取得
    const productType = document.getElementById('productType').value; // 商品の種類を取得
    const feedback = document.getElementById('feedbackText').value; // フィードバック内容を取得

    // 取得した値を画面上の指定した要素に反映（HTML の `innerHTML` を更新）
    document.getElementById('userName').innerHTML = username; // 名前を表示
    document.getElementById('userAge').innerHTML = age; // 年齢を表示
    document.getElementById('userEmail').innerHTML = email; // メールアドレスを表示
    document.getElementById('userJob').innerHTML = job; // 職業を表示
    document.getElementById('userDesignation').innerHTML = designation; // 役職を表示
    document.getElementById('userProductChoice').innerHTML = productType; // 商品の種類を表示
    document.getElementById('userFeedback').innerHTML = feedback; // フィードバック内容を表示

    // ユーザー情報を表示するため、非表示だった要素を表示（スタイルを変更）
    document.getElementById('userInfo').style.display = 'block';

    // フィードバック送信完了をアラートで通知
    alert('Thank you for your valuable feedback');
}

// キーボードのキーが押されたときにイベントを監視する
document.addEventListener('keydown', function(event) {
    // 押されたキーが "Enter" かどうかを判定する
    if (event.key === 'Enter') {
        // "Enter" が押された場合、`submitFeedback()` を実行する（フォームを送信）
        submitFeedback();
    }
});
