var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullname").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["classid"] = document.getElementById("classid").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollno;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mobile;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.classid;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("classid").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
    document.getElementById("classid").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollno;
    selectedRow.cells[2].innerHTML = formData.mobile;
    selectedRow.cells[3].innerHTML = formData.classid;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}