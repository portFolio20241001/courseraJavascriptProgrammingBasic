// カードの色のリスト（各色2枚ずつ作成するために2回繰り返し）
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

let cards = shuffle(colors.concat(colors)); // カードをシャッフルして配列を作成（同じ色のペアを含む）
let selectedCards = [];                     // 選択されたカードを格納する配列
let score = 0;                              // スコアの初期値
let timeLeft = 30;                          // ゲームの残り時間（秒）
let gameInterval;                           // ゲームのタイマーを制御する変数

// HTML要素を取得
const startbtn = document.getElementById('startbtn');               // スタートボタン
const gameContainer = document.getElementById('game-container');    // ゲームエリア
const scoreElement = document.getElementById('score');              // スコア表示
const timerElement = document.getElementById('timer');              // タイマー表示

// カードを生成する関数
function generateCards() {
    // 配列 `cards` の各要素に対して処理を行う
    for (const color of cards) {
        
        const card = document.createElement('div');     // `div` 要素を作成（カードとして使用）
        card.classList.add('card');                     // CSSクラスを適用
        card.dataset.color = color;                     // データ属性に色を設定
        card.textContent = '?';                         // 初期状態では「?」を表示
        gameContainer.appendChild(card);                // `gameContainer` に追加
    }
}

// 配列をシャッフルする関数（Fisher-Yatesアルゴリズムを使用）
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // 0 から i の間のランダムなインデックスを取得
        [array[i], array[j]] = [array[j], array[i]];    // 要素を入れ替え
    }
    return array;
}

// カードがクリックされたときの処理
function handleCardClick(event) {
    const card = event.target; // クリックされた要素を取得

    // カードがすでにマッチしている場合や無効なクリックなら処理しない
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    // カードの色を表示
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;

    // 選択されたカードを配列に追加
    selectedCards.push(card);

    // 2枚のカードが選択されたら一致判定を行う
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// カードの一致をチェックする関数
function checkMatch() {
    const [card1, card2] = selectedCards; // 選択された2枚のカードを取得

    if (card1.dataset.color === card2.dataset.color) {
        // 色が一致する場合、マッチしたクラスを付与
        card1.classList.add('matched');
        card2.classList.add('matched');
        
        // スコアを更新
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // 一致しない場合、元の状態に戻す
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    // 選択カードリストをクリア
    selectedCards = [];
}

// ゲームを開始する関数
function startGame() {
    let timeLeft = 30;                              // 残り時間をリセット
    startbtn.disabled = true;                       // スタートボタンを無効化
    score = 0;                                      // スコアをリセット
    scoreElement.textContent = `Score: ${score}`;   // スコアを表示更新
    startGameTimer(timeLeft);                       // ゲームのタイマーを開始
    cards = shuffle(colors.concat(colors));         // カードをシャッフル
    selectedCards = [];                             // 選択カードをリセット
    gameContainer.innerHTML = '';                   // 画面上のカードをリセット
    generateCards();                                // 新しいカードを生成
    gameContainer.addEventListener('click', handleCardClick); // カードクリックイベントを追加
}

// ゲームのタイマーを管理する関数
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`; // 初期の残り時間を表示

    // 1秒ごとに残り時間を減らす処理を開始
    gameInterval = setInterval(() => {
        timeLeft--; // 残り時間を1秒減らす
        timerElement.textContent = `Time Left: ${timeLeft}`; // タイマー表示を更新

        // 時間切れになった場合
        if (timeLeft === 0) {
            clearInterval(gameInterval);    // タイマーを停止
            alert('Game Over!');            // ゲーム終了メッセージを表示
            startbtn.disabled = false;      // スタートボタンを再び有効化
        }
    }, 1000); // 1000ms（1秒）ごとに処理を実行
}

// スタートボタンがクリックされたときに `startGame` 関数を実行
startbtn.addEventListener('click', startGame);
