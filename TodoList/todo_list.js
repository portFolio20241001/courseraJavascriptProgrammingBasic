// タスク入力フィールドを取得
const taskInput = document.getElementById("taskInput");

// タスク追加ボタンを取得
const addTaskBtn = document.getElementById("addTaskBtn");

// タスクを表示するリストを取得
const taskList = document.getElementById("taskList");

// 完了したタスクをクリアするボタンを取得
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// タスクを格納する配列
let tasks = [];

// タスクを追加する関数
function addTask() {
    // 入力されたタスクテキストを取得し、前後の空白を削除
    const taskText = taskInput.value.trim();
    
    // テキストが空でない場合、タスクを追加
    if (taskText !== "") {
        tasks.push({ text: taskText });  // タスクを配列に追加
        
        console.log(tasks);  // ここで配列の中身を確認

        taskInput.value = "";  // 入力フィールドを空にする
        displayTasks();  // タスクを再表示
    }
}

// タスクをリストに表示する関数
function displayTasks() {
    // 現在表示されているタスクをクリア
    taskList.innerHTML = "";

    // tasks配列の各タスクを処理
    tasks.forEach((task, index) => {
        // 新しいリストアイテムを作成
        const li = document.createElement("li");

        // タスクの内容とチェックボックスを追加
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
        // チェックボックスの変更イベントリスナーを追加
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        
        // リストアイテムをタスクリストに追加
        taskList.appendChild(li);
    });
}

// タスクの完了状態を切り替える関数
function toggleTask(index) {
    // 対応するタスクの完了状態を反転
    tasks[index].completed = !tasks[index].completed;
    displayTasks();  // タスクを再表示
}

// 完了したタスクをフィルタリングして削除する関数
function clearCompletedTasks() {
    // 完了したタスクを除外して新しい配列を作成
    tasks = tasks.filter(task => !task.completed);
    displayTasks();  // タスクを再表示
}

// タスク追加ボタンがクリックされたときにaddTask関数を実行
addTaskBtn.addEventListener("click", addTask);

// 完了したタスクをクリアするボタンがクリックされたときにclearCompletedTasks関数を実行
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// 初期状態でタスクを表示
displayTasks();
