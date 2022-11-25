const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller')

//get all employees 

router.get('/', employeeController.getEmployeeList)

//get employee by id
router.get('/:id', employeeController.getEmployeeBId)

// create new employee route

router.post('/', employeeController.createNewEmployee);

// update employee

router.patch('/:id', employeeController.updateEmployee);

//delete employee

router.delete('/:d', employeeController.deleteEmployee)


module.exports = router;