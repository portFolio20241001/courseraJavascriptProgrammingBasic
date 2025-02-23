const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata']; // 朝食メニューの配列を定義
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];              // メインコースメニューの配列を定義
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];        // デザートメニューの配列を定義

// 🚀朝食メニューのHTML挿入処理
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) =>  // 朝食メニューの各アイテムをHTMLの<p>タグとして整形
    `<p>Item ${index + 1}: ${item}</p>` // 各メニューを「Item X: メニュー名」というフォーマットに変換
).join(''); // 配列の各要素を結合して1つの文字列にする
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML; // HTML内のID 'breakfastMenuItems' に朝食メニューのHTMLを挿入

// 🚀メインコースメニューのHTML挿入処理
let mainCourseItem = ''; // メインコースメニューを格納する変数を初期化
mainCourseMenu.forEach((item, index) => { // forEachを使用してメインコースの各アイテムをHTML形式で追加
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`; // `+=` を使用して文字列を追加
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem; // HTML内のID 'maincourseMenuItems' にメインコースのHTMLを挿入

// 🚀デザートメニューのHTML挿入処理
let dessertItem = ''; // デザートメニューを格納する変数を初期化
for (let i = 0; i < dessertMenu.length; i++) { // forループを使用してデザートメニューの各アイテムをHTML形式で追加
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`; // `+=` を使用して文字列を追加
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem; // HTML内のID 'dessertMenuItems' にデザートメニューのHTMLを挿入
