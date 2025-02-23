// 従業員のデータを格納する配列
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },  // IT部門の従業員
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },  // HR部門の従業員
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },  // 財務部門の従業員
    // さらに従業員を追加可能
];

// 全従業員を表示する関数
function displayEmployees() {
    const totalEmployees = employees
        .map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');  // 各従業員の情報を文字列として結合

    document.getElementById('employeesDetails').innerHTML = totalEmployees;  // HTMLに従業員情報を表示
}

// 全従業員の給与合計を計算し、アラートで表示する関数
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);  // 全給与を合計
    alert(`Total Salaries: $${totalSalaries}`);  // アラートで給与合計を表示
}

// HR部門の従業員のみを表示する関数
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');  // HR部門の従業員を抽出
    const hrEmployeesDisplay = hrEmployees
        .map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');  // 各従業員の情報を文字列として結合

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;  // HTMLにHR部門の従業員情報を表示
}

// 指定したIDの従業員を検索し、表示する関数
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);  // IDが一致する従業員を検索

    if (foundEmployee) {
        // 該当の従業員が見つかった場合、情報を表示
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        // 該当の従業員が見つからなかった場合、エラーメッセージを表示
        document.getElementById('employeesDetails').innerHTML = '指定されたIDの従業員は見つかりませんでした。';
    }
}
