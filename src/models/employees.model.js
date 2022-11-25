var dbConnect = require('../../config/dbConfig');

var Employee = function (employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organisation = employee.organisation;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date()
    this.updated_at = new Date();
}

// get all employees

Employee.getAllEmployees = (result)=>{
    dbConnect.query('SELECT * FROM employees', (err, res)=>{
        if (err) {
            console.log(err.message)
            result(null, err)
        }else{
            console.log('Employees fetched successfully')
            result(null, res)
        }
    })
}

Employee.getEmployeeById = (id, result) =>{
    dbConnect.query('SELECT * FROM employees WHERE id = ? ;', id ,(err, res)=>{
        if (err) {
            console.log(err.message)
            result(null, err)
        }else{
            console.log('Employee id fetched successfully')
            result(null, res)
        }
    })
}

// create new employee 

Employee.addNewEmployee = (employeeReqData, result)=>{
    dbConnect.query('INSERT INTO employees SET ? ;', employeeReqData, (err, res)=>{
        if(err){
            console.log('error while inserting data');
            result(null, err);
        }else{
            console.log('employee inserted successfully');
            result(null, res)
        }
    })
}

//update employee

Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConnect.query('UPDATE employees SET first_name= ?, last_name=?, email=?, phone=?, organisation=?, designation=?, salary=?, status=?  WHERE id= ?;',  [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, employeeReqData.phone, employeeReqData.organisation, employeeReqData.designation, employeeReqData.salary, employeeReqData.status, id] ,(err, res)=>{
        if(err){
            console.log(err.message);
            result(null, err);
        }else{
            console.log('employee updated successfully');
            result(null, res)
        }
    })
}

//delete an employee

Employee.deleteEmployee = (id, result)=>{
    dbConnect.query('DELETE FROM employees WHERE id=? ;', [id], (err, res)=>{
        if(err){
            console.log(err.message);
            result(null, err);
        }else{
            console.log('employee deleted successfully');
            result(null, res)
        }
    })
}

module.exports = Employee;