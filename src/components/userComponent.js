import MongoLogger from "../core/crossCuttingConcerns/loggers/mongoLogger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("--------------- User Component ---------------"); 
let loggerService = new MongoLogger();
let userService = new UserService(loggerService);


let user1 = new User(1, "Mert", "C", "24", "İzmir");
let user2 = new User(2, "Alperen", "C", "21", "İzmir");

userService.add(user1);
userService.add(user2);
console.log(userService.list());
console.log(userService.getById(2));
