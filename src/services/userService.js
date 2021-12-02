import Message from "../core/utilities/constants/message.js";
import ValidationTool from "../core/utilities/validators/validationTool.js";
import { users } from "../data/users.js";

export default class UserService {
  constructor(loggerService) {
    this.users = [];
    this.loggerService = loggerService;
    this.validationTool = new ValidationTool();
    this.messageService = new Message();
  }
  load() {
    this.users = users.filter((user) => user.type === "user");
  }

  add(user) {
    // let keyWords = Object.keys(user)
    // Object.keys(user) bir objedeki key değerlerini array olarak veriri.
    let requiredFields = ["id", "firstName", "lastName", "city", "age"];
    let fieldValidate = this.validationTool.fieldChecker(
      user,
      ...requiredFields
    );
    let ageCheckResult = this.validationTool.ageChecker(user);

    if (!fieldValidate.error && !ageCheckResult.error) {
      this.users.push(user);
      this.loggerService.log(`Kullanıcı eklendi ${user.firstName}`, user);
    } else {
      if (fieldValidate.error) {
        this.loggerService.logWithOutData(fieldValidate.message);
      } else if (ageCheckResult.error) {
        this.loggerService.logWithOutData(ageCheckResult.message);
      }
    }
  }

  list() {
    return this.users;
  }

  getEmployeeServiceLogs() {
    return this.loggerService.getLogs();
  }

  getById(id) {
    return this.users.filter((user) => user.id === id);
  }
}