// 空の配列を定義して、書籍情報を格納します
let books = [];

// 新しい書籍を追加する関数
function addBook() {
    // 入力フォームから書籍名、著者名、説明、ページ数を取得
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    // すべての入力欄が正しく入力されているか確認
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // 新しい書籍オブジェクトを作成
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        
        // 書籍をbooks配列に追加
        books.push(book);
        
        // 書籍リストを表示する関数を呼び出し
        showbooks();
        
        // 入力欄をクリアする関数を呼び出し
        clearInputs();
    } else {
        // もし入力が正しくない場合、警告メッセージを表示
        alert('Please fill in all fields correctly.');
    }
}

// 書籍情報を表示する関数
function showbooks() {
    // books配列の各書籍をHTMLに変換し、表示用の文字列を作成
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    
    // booksDivの内容を、HTMLの#booksのIDに設定
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// 入力欄をクリアする関数
function clearInputs() {
    // 各入力欄を空にする
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
