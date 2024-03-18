function addRow() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    if (firstName && lastName) {
        const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = table.rows.length - 1;
        cell2.innerHTML = firstName;
        cell3.innerHTML = lastName;
        cell4.innerHTML = '<button onclick="deleteRow(this)">Удалить</button>';

        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    } else {
        alert("Пожалуйста, введите имя и фамилию");
    }
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);

    const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i + 1;
    }
}