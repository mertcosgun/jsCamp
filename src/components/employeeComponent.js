import MongoLogger from "../core/crossCuttingConcerns/loggers/mongoLogger.js";
import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService..js";

console.log("--------------- Employee Component ---------------"); 

let mongoLogger = new MongoLogger()

let employeeService = new EmployeeService(mongoLogger);
employeeService.load()

let employee1 = new Employee(90, "Ahmet", "Yüksektepe", 45, 'Elazığ', 1224552114)
employee1.type = "employee"
employeeService.add(employee1)


console.log(employeeService.list());

console.log(employeeService.getEmployeeServiceLogs())