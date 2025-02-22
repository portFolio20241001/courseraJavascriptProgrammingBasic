let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function grosserTracker() {
    // 各入力ボックスの値を取得し、数値に変換
    let grocery1 = parseFloat(document.getElementById("grocery1").value) || 0;
    let grocery2 = parseFloat(document.getElementById("grocery2").value) || 0;
    let grocery3 = parseFloat(document.getElementById("grocery3").value) || 0;

    // 合計金額を計算
    let total = grocery1 + grocery2 + grocery3;

    // 結果を画面に表示
    document.getElementById("totalAmount").textContent = total;
}