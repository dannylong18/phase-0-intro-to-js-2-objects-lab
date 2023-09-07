// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "1 Broadway",
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue["streetAddress"] = "11 Broadway";
    return updateEmployeeWithKeyAndValue
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    let deleteFromEmployeeByKey = {...employee};
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee.name;
    return employee;
}