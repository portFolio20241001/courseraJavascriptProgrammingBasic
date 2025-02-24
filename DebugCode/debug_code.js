function performOperation() {  // 演算を実行する関数
    // ユーザーからの入力を取得
    let num1 = parseInt(document.getElementById('input1').value);  // 入力1を整数に変換
    let num2 = parseInt(document.getElementById('input2').value);  // 入力2を整数に変換
    
    // 入力値が有効な数字か確認
    if (!isNaN(num1) && !isNaN(num2)) {  // 両方の入力が有効な数字であるかを確認
        // 演算を実行
        let result = multiply(num1, num2);  // 数字を掛け算する関数を呼び出す
        
        // 結果を表示
        displayResult(result);  // 結果を表示する関数を呼び出す
    } else {
        displayResult('Please enter valid numbers');  // 無効な入力の場合、エラーメッセージを表示
    }
}

function multiply(a, b) {  // 数字を掛け算する関数
    // 実行を一時停止するデバッガーステートメントを追加
    debugger;  // ブラウザのデバッガーを起動する
    
    // 数字を掛け算して返す
    return a * b;  // 掛け算の結果を返す
}

function displayResult(result) {  // 結果を表示する関数
    // 結果を表示するための<p>タグ要素を取得
    const resultElement = document.getElementById('result');  // 結果を表示するための要素を取得
    resultElement.textContent = `The result is: ${result}`;  // 結果を<p>タグに表示
}
