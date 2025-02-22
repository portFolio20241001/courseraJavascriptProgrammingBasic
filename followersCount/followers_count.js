let count = 0; // フォロワー数を0に初期化

function increaseCount() {
  count++; // フォロワー数を1増加
  displayCount(); // フォロワー数を画面に表示
  checkCountValue(); // フォロワー数をチェックし、特定の値でメッセージを表示
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count; // HTMLのフォロワー数表示を更新
}

function checkCountValue() {
  if (count === 10) { // フォロワー数が10になった場合
    alert("Your Instagram post gained 10 followers! Congratulations!"); // アラートメッセージを表示
  } else if (count === 20) { // フォロワー数が20になった場合
    alert("Your Instagram post gained 20 followers! Keep it up!"); // アラートメッセージを表示
  }
}
