import MongoLogger from "../core/crossCuttingConcerns/loggers/mongoLogger.js";
import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

console.log("--------------- Customer Component ---------------"); 
let mongoLogger = new MongoLogger()
let customerService = new CustomerService(mongoLogger);
customerService.load()


let customer1 = new Customer(89, "Cihan", "Canveren", 35, "İstanbul", 13246732167986)
customer1.type = "customer"


customerService.add(customer1)


console.log(customerService.list());   