// const { json } = require('body-parser');

const EmployeeModel = require('../models/employees.model')

//get all employees list

exports.getEmployeeList = (req, res)=>{
    EmployeeModel.getAllEmployees((err, employees)=>{
        console.log('we are here')
        if (err) res.send(err);
        console.log('employees', employees)
        res.send(employees)
    })
}

exports.getEmployeeBId = (req, res)=>{
EmployeeModel.getEmployeeById(req.params.id ,(err, employees)=>{
    console.log('we are here')
        if (err) res.send(err);
        console.log('employees', employees)
        res.send(employees)
})
}

// create new employee

exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.addNewEmployee(employeeReqData, (err, employees)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: employees.insertId})
        })
    }
}

//update an employee

exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employees)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Updated Successfully', data: employees.insertId})
        })
    }
}

// delete an employee

exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employees)=>{
        if(err)
        res.send(err);
        res.json({status: true, message: 'Employee has been deleted Successfully'})
    })
}